const privacy = `# Privacy Policy

COVID Shield has been designed with user privacy as the top priority. We must strike a balance between protecting public health and preserving personal privacy, and COVID Shield takes a privacy-first approach. The COVID Shield app is designed to make it as difficult as possible for COVID Shield or others to link the information you choose to provide to you or your device, and to use this information only to enable exposure notification in the midst of this unprecedented pandemic.

## What Information Do We Use?
In keeping with Google and Apple's [approach](https://www.apple.com/covid19/contacttracing), COVID Shield is designed to collect and use as little personal information as possible in order to enable exposure notification. COVID Shield does not collect or use any personally-identifying information except for:
- Random IDs (also known as Rolling Proximity Identifiers)
  * These rotating identifiers are shared via Bluetooth between users who have installed the app on nearby devices. This process is managed by your device, not COVID Shield.
  * These identifiers are generated by and stored on your device, not by COVID Shield, and are used only to allow COVID Shield and your device to check for exposure when you or someone else uploads a Temporary Exposure Key.
- Temporary Exposure Keys (also known as Diagnosis Keys)
  * If you receive a positive test result, you will be given a Temporary Exposure Key for you to upload and share with all users of the app, only if you decide to do so. You completely control the decision whether to upload the Temporary Exposure Key or not.
  * COVID Shield stores your Temporary Exposure Key for at most thirty days.
  * Other users can then use COVID Shield to determine if any of the Random IDs their device has come into contact with are associated with a Temporary Exposure Key (and thus, whether they may have come into contact with an infected individual).
- App Usage Logs
  * As with almost any app or internet service, COVID Shield automatically generates logs when you use the service. These logs include some information about your device. We use this information to troubleshoot issues with COVID Shield.
  * These logs DO NOT include Random IDs or Temporary Exposure Keys, and cannot be used to tie either a Rolling Proximity Identifier or Temporary Exposure Key back to you or your device.
  * These logs are automatically deleted 7 days after they are generated.
COVID Shield does not collect location data from your device, and does not collect or share information tying you or your device to either the Random IDs or Temporary Exposure Keys you generate.

## When Do We Share Your Information?
We will not voluntarily share any of your personal information with anyone, except:
- When you choose to upload a Temporary Exposure Key COVID Shield will share that information (which cannot be linked back to you by someone who does not have access to your device) with other devices that have been in contact with your device, as described in the Google and Apple [Exposure Notification Framework](https://www.apple.com/covid19/contacttracing).
- We store your personal information in an encrypted form using Amazon Web Services. Amazon Web Services may store this information outside of Canada, including in the United States.

## How Do We Protect Your Information?
COVID Shield protects Temporary Exposure Keys using Google and Apple’s [Exposure Notification Framework](https://www.apple.com/covid19/contacttracing), which includes very specific requirements as to how this information will be encrypted and transferred. COVID Shield does not store or generate your Random IDs—that is handled by your device.

## Your Rights Over Your Information

Because we have no way to tie a Temporary Exposure Key or our Access Logs to you without your device, we have no way to securely provide you with or delete this information upon request. That said, you have complete control over your use of this technology. Your device should allow you to turn off exposure notifications or delete the exposure logs stored on your device at any time. Additionally, you can uninstall COVID Shield at any time. If you do so, all Temporary Encryption Keys stored by COVID Shield will be deleted.

If you have any questions or complaints about COVID Shield’s privacy practices, you can email us at [privacy email alias].

Last updated May 13, 2020
`;

export default privacy;
