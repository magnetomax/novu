# Novu Ses Provider

A SES email provider library for [@novu/node](https://github.com/novu-co/novu)

## Usage

```javascript
import { SESEmailProvider } from "@novu/ses"

const provider = new SESEmailProvider({
    region: "eu-west-1",
    accessKeyId: "AWS_ACCESS_KEY_ID",
    secretAccessKey: "AWS_SECRET_ACCESS_KEY",
    from: "from@email.com",
});
```
