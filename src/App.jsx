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

        if (window.OneSignal) {
          try {
            const isEnabled = await window.OneSignal.isPushNotificationsEnabled()
            setIsSubscribed(isEnabled)
          } catch (error) {
            // Fallback: check permission directly
            const permission = Notification.permission
            setIsSubscribed(permission === 'granted')
          }
        }
      } catch (error) {
        console.error('Error checking subscription:', error)
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

      if (window.OneSignal) {
        // Request permission and register
        await window.OneSignal.registerForPushNotifications()
        const isEnabled = await window.OneSignal.isPushNotificationsEnabled()
        setIsSubscribed(isEnabled)
        
        if (isEnabled) {
          alert('Notifications enabled successfully!')
        } else {
          alert('Please allow notifications in your browser settings.')
        }
      } else {
        alert('OneSignal is not initialized. Please refresh the page and try again.')
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

      if (window.OneSignal) {
        // Set subscription to false
        await window.OneSignal.setSubscription(false)
        setIsSubscribed(false)
        alert('Notifications disabled successfully!')
      } else {
        alert('OneSignal is not initialized. Please refresh the page and try again.')
      }
    } catch (error) {
      console.error('Error disabling notifications:', error)
      alert('Failed to disable notifications.')
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

