module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'get-started/how-it-works',
        'get-started/quick-start',
        'get-started/installation',
        'get-started/upgrade-and-downgrade',
        'get-started/faq',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/environment',
        'configuration/database',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
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
      label: 'API',
      items: [
        'api/authentication',
        'api/authorization',
      ],
    }
  ],
};
