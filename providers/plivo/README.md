# Nodejs Plivo Provider

A plivo sms provider library for [@novu/node](https://github.com/novu-co/novu).

## Usage

```javascript
import { PlivoSmsProvider } from '@novu/plivo';

const provider = new PlivoSmsProvider({
  accountSid: process.env.PLIVO_ACCOUNT_ID,
  authToken: process.env.PLIVO_AUTH_TOKEN,
  from: process.env.PLIVO_FROM_NUMBER, // a valid plivo phone number
});
```
