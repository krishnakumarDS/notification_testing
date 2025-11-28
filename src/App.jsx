import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check subscription status when OneSignal is ready
    const checkSubscription = async () => {
      try {
        // Wait for OneSignal to be available
        await new Promise((resolve) => {
          if (window.OneSignal) {
            resolve()
          } else {
            window.OneSignalDeferred = window.OneSignalDeferred || []
            window.OneSignalDeferred.push(async function(OneSignal) {
              window.OneSignal = OneSignal
              resolve()
            })
            setTimeout(resolve, 3000)
          }
        })

        if (window.OneSignal && window.OneSignal.Notifications) {
          try {
            const permission = await window.OneSignal.Notifications.permissionNative
            setIsSubscribed(permission === 'granted')
          } catch (error) {
            // Fallback: check permission directly
            const permission = Notification.permission
            setIsSubscribed(permission === 'granted')
          }
        } else {
          // Fallback: check browser permission
          const permission = Notification.permission
          setIsSubscribed(permission === 'granted')
        }
      } catch (error) {
        console.error('Error checking subscription:', error)
        // Fallback: check browser permission
        const permission = Notification.permission
        setIsSubscribed(permission === 'granted')
      }
    }

    // Check after a delay to ensure OneSignal is initialized
    const timer = setTimeout(checkSubscription, 2000)
    return () => clearTimeout(timer)
  }, [])

  const enableNotifications = async () => {
    setIsLoading(true)
    try {
      // Wait for OneSignal
      if (!window.OneSignal) {
        await new Promise((resolve) => {
          window.OneSignalDeferred = window.OneSignalDeferred || []
          window.OneSignalDeferred.push(async function(OneSignal) {
            window.OneSignal = OneSignal
            resolve()
          })
          setTimeout(resolve, 3000)
        })
      }

      if (window.OneSignal && window.OneSignal.Notifications) {
        // Use OneSignal v16 API
        const permission = await window.OneSignal.Notifications.requestPermission()
        
        if (permission === 'granted') {
          setIsSubscribed(true)
          alert('Notifications enabled successfully!')
        } else {
          setIsSubscribed(false)
          alert('Notification permission was denied. Please enable it in your browser settings.')
        }
      } else {
        // Fallback: use browser Notification API
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          setIsSubscribed(true)
          alert('Notifications enabled successfully!')
        } else {
          setIsSubscribed(false)
          alert('Notification permission was denied. Please enable it in your browser settings.')
        }
      }
    } catch (error) {
      console.error('Error enabling notifications:', error)
      alert('Failed to enable notifications. Please check your browser settings.')
    } finally {
      setIsLoading(false)
    }
  }

  const disableNotifications = async () => {
    setIsLoading(true)
    try {
      if (!window.OneSignal) {
        await new Promise((resolve) => {
          window.OneSignalDeferred = window.OneSignalDeferred || []
          window.OneSignalDeferred.push(async function(OneSignal) {
            window.OneSignal = OneSignal
            resolve()
          })
          setTimeout(resolve, 3000)
        })
      }

      if (window.OneSignal && window.OneSignal.Session) {
        // Use OneSignal v16 API to disable subscription
        await window.OneSignal.Session.setPushSubscription(false)
        setIsSubscribed(false)
        alert('Notifications disabled successfully!')
      } else {
        // If OneSignal API not available, just update local state
        setIsSubscribed(false)
        alert('Notifications disabled. Note: You may need to unsubscribe from your browser settings.')
      }
    } catch (error) {
      console.error('Error disabling notifications:', error)
      // Still update local state even if API call fails
      setIsSubscribed(false)
      alert('Notifications disabled locally. You may need to unsubscribe from your browser settings.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Notification Settings</h1>
        <div className="button-group">
          <button
            className="btn btn-enable"
            onClick={enableNotifications}
            disabled={isLoading || isSubscribed}
          >
            Enable Notification
          </button>
          <button
            className="btn btn-disable"
            onClick={disableNotifications}
            disabled={isLoading || !isSubscribed}
          >
            Disable Notification
          </button>
        </div>
        {isSubscribed && (
          <p className="status">Notifications are currently enabled</p>
        )}
        {!isSubscribed && (
          <p className="status">Notifications are currently disabled</p>
        )}
      </div>
    </div>
  )
}

export default App

