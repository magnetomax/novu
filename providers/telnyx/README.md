# Novu Telnyx Provider

A Telnyx sms provider library for [@novu/node](https://github.com/novu-co/novu)

## Usage

```javascript
import { TelnyxSmsProvider } from '@novu/telnyx';

const provider = new TelnyxSmsProvider({
  apiKey: process.env.TELNYX_API_KEY,
  messageProfileId: process.env.TELNYX_MESSAGE_PROFILE_ID,
  from: process.env.FROM, // an alphanumeric sender Id 
});
```

