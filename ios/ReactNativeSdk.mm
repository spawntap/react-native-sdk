#import "ReactNativeSdk.h"

@implementation ReactNativeSdk
RCT_EXPORT_MODULE(SpawnTapSDK)

RCT_REMAP_METHOD(initializeSDK,
                 initializeSDK:(NSDictionary *)config
                 successCallback:(RCTResponseSenderBlock)successCallback
                 failureCallback:(RCTResponseSenderBlock)failureCallback)
{
  failureCallback(@[@"SPAWNTAP_UNSUPPORTED_PLATFORM", @"SpawnTap is currently supported on Android only."]);
}

RCT_REMAP_METHOD(open,
                 openWithSuccessCallback:(RCTResponseSenderBlock)successCallback
                 failureCallback:(RCTResponseSenderBlock)failureCallback)
{
  failureCallback(@[@"SPAWNTAP_UNSUPPORTED_PLATFORM", @"SpawnTap is currently supported on Android only."]);
}

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
