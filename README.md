**1. Create a new project**
  - Go to [Console actions google](console.actions.google.com)
  - Click on *New project* button
  - Then enter a project name (here, for the tutorial I'll name it *actions-tuto*), choose a language (I'm going on *English*) and a pick a region of your choise
  - Select *Smart Home* card then press *Start building*

**2. Setup**
  - On the *Develop* tab, in *Invocation* set a *Display name* (for me it will be *magic test*) then hit *Save* button
  - Go in the *Actions* tab (left menu), and paste your webhook here then *Save*
  - On the *Account linking* tab (left menu), enter your *0Auth* informations then *Save*

  **3. Deploy**
  - Go to the *Deploy* tab, and enter:
    - Description (Short + Long)
    - Images (Banner + Icon)
    - Contact details (Mail + Name)
    - Privacy & Consent (Only privacy is needed)

  **4. Start project**
  - Clone the project then run *server.js*
  *Note that this is an example project, check [the documentation](https://developers.home.google.com/cloud-to-cloud/guides) to make your own connected devices*

  **5. Authorization**
  - If it's not working, you'll need to allow some permissions [here](https://myactivity.google.com/activitycontrols?settings=search&pli=1).