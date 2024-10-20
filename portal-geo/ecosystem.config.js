/* eslint-disable prettier/prettier */
module.exports = {
    apps: [
        {
            name: 'app-mobilidade',
            script: 'dist/main.js',
            instances: 3,
            exec_mode: 'cluster',
            max_memory_restart: '8G',
            env: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
            log_date_format: 'YYYY-MM-DD HH:mm Z',
            error_file: 'C:\\Users\\Gabriel Pedro Veras\\Desktop\\app-mobilidade\\src\\Modules\\log\\app-mobilidade-error.log',
            out_file: 'C:\\Users\\Gabriel Pedro Veras\\Desktop\\app-mobilidade\\src\\Modules\\log\\app-mobilidade-out.log',
            merge_logs: true,  
            max_restarts: 10,
            restart_delay: 10000,
        },
    ],
};
