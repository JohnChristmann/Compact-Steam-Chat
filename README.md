# Compact-Steam-Chat

A true compact mode for Steam's new chat interface

## Purpose and Limitations

This project is intended to reduce the required screen space and CPU load of Steam's new chat interface.  Valve's official compact mode, which it is improving regularly, is woefully inadequate.  Unfortunately Steam does not provide any way to modify the new chat system since the new interface is separate from the legacy skinning system and Steam overwrites the files on startup; however, since the new chat interface is entirely web-based, the web version can be modified using custom CSS and Javascript.  This is best done by wrapping the web chat with Electron as a standalone application.

## Main Features

1. Remove unnecessary interface elements (I.E. user avatars)
2. Reduce the size of interface elements and text
3. Reduce the padding between interface elements
4. Remove CPU-hogging notification animations
5. Change link and image in-lining to mouseover popups (in progress)

## Installation

1. Install node.js from https://nodejs.org/en/download/
2. Install nativefier with the command `npm install nativefier -g`
3. Clone the repository and run the included batch file (Windows) or use the command line `./nativefier --name "Steam Chat" --single-instance --inject inject.css --inject inject.js "https://steamcommunity.com/chat?l=english"`
4. Run the generated application
5. Log into Steam inside the application (Steam Guard will require a code)
6. Click on the settings (gear icon) in the upper left
7. Enable Compact favorites area, Compact friends list & chat view, and set the chat font size to small

## Updating

To update to the most recent changes, you do not need to rebuild your chat application.  Simply navigate to `<chat app directory>/resources/app/inject/` and replace the files with the most recent version.  Restart the chat application to load the new files.
