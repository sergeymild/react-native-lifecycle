
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNLifecycleSpec.h"

@interface Lifecycle : NSObject <NativeLifecycleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Lifecycle : NSObject <RCTBridgeModule>
#endif

@end
