module.exports = {
  apps: [
    {
      name: 'Demo-v1',
      script: './dist/main.js',
      cwd: __dirname,
      watch: '.',
      autorestart: true,
      instances: 4,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'development',
      },
    },
    // {
    //   script: './service-worker/',
    //   watch: ['./service-worker'],
    // },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
