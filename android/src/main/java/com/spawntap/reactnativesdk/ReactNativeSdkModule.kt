package com.spawntap.reactnativesdk

import com.facebook.react.bridge.ReactApplicationContext

class ReactNativeSdkModule(reactContext: ReactApplicationContext) :
  NativeReactNativeSdkSpec(reactContext) {

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = NativeReactNativeSdkSpec.NAME
  }
}
