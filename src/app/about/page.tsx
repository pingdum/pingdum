import os from 'os';

export default async function Home() {
  const osInfo = {
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptime: os.uptime(),
    homedir: os.homedir(),
    hostname: os.hostname(),
    networkInterfaces: os.networkInterfaces(),
    release: os.release(),
    tmpdir: os.tmpdir(),
    type: os.type(),
    userInfo: os.userInfo(),
  };

  return <pre>{JSON.stringify(osInfo, null, 2)}</pre>;
}
