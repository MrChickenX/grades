# Grade Management Software

A small, local-first web app to record and track school grades.

## Description
This application stores all user data locally in your browser (using `localStorage`). The app is lightweight and does not send your data to any server—your information stays on your device unless you explicitly export or share it.

## Where your data is stored
- Data is saved to your browser's **localStorage**.
- localStorage normally persists across page reloads and browser updates, but it can be removed if you clear browser data, switch browsers or profiles, or use a private/incognito window.
- The app does **not** sync data across devices automatically and there is **no remote backup** provided.

## Backup & export (recommended)
To avoid accidental data loss you should back up your data regularly. Two common ways:

1. **Built-in export / import**  
   - Use it to download a JSON backup file and keep it in a safe place.  
   - To restore, use the app's import feature and select your backup file.

## Important notes about updates
- In general, localStorage is retained when updating your site or web app. However, structural changes to how the app stores data (e.g., renaming storage keys or changing formats) or clearing browser storage will make old data inaccessible.  
- Because of this, keep regular backups and test restores after major updates.

## Privacy & security
- Your data stays on your device; it is not uploaded to our servers.  
- Do not share backups containing sensitive information unless you trust the recipient. Treat exported files like any sensitive file on your system.

## Access from other devices
- There is **no automatic way** to access the same data from another device. To use your data elsewhere, export it from this device and import it on the other device.

## Troubleshooting
- If your data appears missing:
  - Ensure you are using the same browser and profile as before (not an incognito window).
  - Check Developer Tools → Application/Storage → Local Storage for known keys.
  - If you have a backup file, try importing it.

## Credits
The sidebar design is based on a template from Coding2Go: https://www.coding2go.com

---
