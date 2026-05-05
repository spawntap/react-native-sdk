package com.spawntap.reactnativesdk

import androidx.annotation.NonNull
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.spawntap.sdk.SpawnTap
import com.spawntap.sdk.SpawnTapConfig
import com.spawntap.sdk.SpawnTapListener

class SpawnTapSDK(private val reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  @NonNull
  override fun getName(): String {
    return "SpawnTapSDK"
  }

  @ReactMethod
  fun initializeSDK(initializeMap: ReadableMap, successCallback: Callback, failureCallback: Callback) {
    val sdkKey = initializeMap.getString("sdkKey")

    if (sdkKey.isNullOrBlank()) {
      failureCallback.invoke("SPAWNTAP_INVALID_SDK_KEY", "sdkKey is required")
      return
    }

    val config = SpawnTapConfig(sdkKey)
    if (initializeMap.hasKey("userId") && !initializeMap.isNull("userId")) {
      val userId = initializeMap.getString("userId")
      if (userId != null) {
        config.setUserId(userId)
      }
    }

    SpawnTap.init(reactContext, config, object : SpawnTapListener {
      override fun onSuccess() {
        successCallback.invoke()
      }

      override fun onFailed(error: String) {
        failureCallback.invoke("SPAWNTAP_INIT_FAILED", error)
      }
    })
  }

  @ReactMethod
  fun open(successCallback: Callback, failureCallback: Callback) {
    val activity = reactApplicationContext.currentActivity

    if (activity == null) {
      failureCallback.invoke("SPAWNTAP_NO_ACTIVITY", "SpawnTap requires a foreground Activity to open")
      return
    }

    var settled = false

    SpawnTap.open(activity, object : SpawnTapListener {
      override fun onSuccess() {
        if (!settled) {
          settled = true
          successCallback.invoke()
        }
      }

      override fun onFailed(error: String) {
        if (!settled) {
          settled = true
          failureCallback.invoke("SPAWNTAP_OPEN_FAILED", error)
        }
      }
    })

    if (!settled) {
      settled = true
      successCallback.invoke()
    }
  }
}
