'use strict';

const packageJson = require('../../package.json');

module.exports = {
    
    brand: {
        htmlInjection: true,
        app: {
            language: 'en', // https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
            name: 'Unicom',
            title: '<h1>Unicom</h1>Free browser based Real-time video calls.<br />Simple, Secure, Fast.',
            description:
                'Start your next video call with a single click. No download, plug-in, or login is required. Just get straight to talking, messaging, and sharing your screen.',
            joinDescription: 'Pick a room name.<br />How about this one?',
            joinButtonLabel: 'JOIN ROOM',
            joinLastLabel: 'Your recent room:',
        },
        og: {
            type: 'app-webrtc',
            siteName: 'Unicom',
            title: 'Click the link to make a call.',
            description:
                'unicomTalk calling provides real-time HD quality and latency simply not available with traditional technology.',
           
        },
        site: {
            shortcutIcon: '../images/logo.svg',
            appleTouchIcon: '../images/logo.svg',
            landingTitle: 'Unicom a Free Secure Video Calls, Chat & Screen Sharing.',
            newCallTitle: 'Unicom a Free Secure Video Calls, Chat & Screen Sharing.',
            newCallRoomTitle: 'Pick name. <br />Share URL. <br />Start conference.',
            newCallRoomDescription:
                "Each room has its disposable URL. Just pick a room name and share your custom URL. It's that easy.",
            loginTitle: 'Unicom - Host Protected login required.',
            clientTitle: 'Unicom WebRTC Video call, Chat Room & Screen Sharing.',
            privacyPolicyTitle: 'Unicom - privacy and policy.',
            stunTurnTitle: 'Test Stun/Turn Servers.',
            notFoundTitle: 'Unicom - 404 Page not found.',
        },
        html: {
            features: true,
            browsers: true,
            teams: true, // please keep me always true ;)
            tryEasier: true,
            poweredBy: true,
            sponsors: true,
            advertisers: true,
            footer: true,
        },
        about: {
           
            title: `WebRTC P2P v${packageJson.version}`,
            html: `
                <button 
                    id="support-button" 
                    data-umami-event="Support button" 
                   
                    <i class="fas fa-heart" ></i>&nbsp;Support
                </button>
                <br /><br /><br />
               
                <br />
                
                <br /><br />
                
            `,
        },
        //...
    },
    
    buttons: {
        main: {
            showShareQr: true,
            showShareRoomBtn: true, // For guests
            showHideMeBtn: true,
            showFullScreenBtn: true,
            showAudioBtn: true,
            showVideoBtn: true,
            showScreenBtn: true, // autodetected
            showRecordStreamBtn: true,
            showChatRoomBtn: true,
            showCaptionRoomBtn: true,
            showRoomEmojiPickerBtn: true,
            showMyHandBtn: true,
            showWhiteboardBtn: true,
            showSnapshotRoomBtn: true,
            showFileShareBtn: true,
            showDocumentPipBtn: true,
            showMySettingsBtn: true,
            showAboutBtn: true, // Please keep me always true, Thank you!
            showExtraBtn: true,
        },
        chat: {
            showTogglePinBtn: true,
            showMaxBtn: true,
            showSaveMessageBtn: true,
            showMarkDownBtn: true,
            showChatGPTBtn: true,
            showFileShareBtn: true,
            showShareVideoAudioBtn: true,
            showParticipantsBtn: true,
        },
        caption: {
            showTogglePinBtn: true,
            showMaxBtn: true,
        },
        settings: {
            showMicOptionsBtn: true,
            showTabRoomPeerName: true,
            showTabRoomParticipants: true,
            showTabRoomSecurity: true,
            showTabEmailInvitation: true,
            showCaptionEveryoneBtn: true,
            showMuteEveryoneBtn: true,
            showHideEveryoneBtn: true,
            showEjectEveryoneBtn: true,
            showLockRoomBtn: true,
            showUnlockRoomBtn: true,
            showShortcutsBtn: true,
        },
        remote: {
            showAudioVolume: true,
            audioBtnClickAllowed: true,
            videoBtnClickAllowed: true,
            showVideoPipBtn: true,
            showKickOutBtn: true,
            showSnapShotBtn: true,
            showFileShareBtn: true,
            showShareVideoAudioBtn: true,
            showGeoLocationBtn: true,
            showPrivateMessageBtn: true,
            showZoomInOutBtn: false,
            showVideoFocusBtn: true,
        },
        local: {
            showVideoPipBtn: true,
            showSnapShotBtn: true,
            showVideoCircleBtn: true,
            showZoomInOutBtn: false,
        },
        whiteboard: {
            whiteboardLockBtn: false,
        },
    },
};
