const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("before install");
    window.deferredPrompt = event; 
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    console.log('clicked')

    if (!promptEvent){
        return;
    }
    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event

window.addEventListener('appinstalled', (event) => {
    console.log('cleared');
    window.deferredPrompt = null;
})
