module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "npm",
      args: "run start -- -H 0.0.0.0",
      interpreter: "cmd.exe"
    },
    {
      name: "location-api",
      script: "location-api.js"
    }
  ]
};