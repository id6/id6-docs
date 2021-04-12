module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'get-started/how-it-works',
        'get-started/quick-start',
        'get-started/installation',
        'get-started/upgrade-and-downgrade',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      collapsed: false,
      items: [
        'authentication/local',
        'authentication/in-memory',
        'authentication/gitea',
        'authentication/github',
        'authentication/gitlab',
        'authentication/google',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      collapsed: false,
      items: [
        'configuration/emails',
        'configuration/environment',
      ],
    },
  ],
};
