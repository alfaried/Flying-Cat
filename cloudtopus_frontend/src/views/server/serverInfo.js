const applicationInfoList = {
  '13.228.95.141': [
    {
      id: 'i-02901c2e26147bd43',
      health: 'Healthy',
      cpuUtilization: 0.8,
      networkIN: 525,
      networkOUT: 1152,
      instanceID: 'i-02901c2e26147bd43',
      instanceName: 'Flying_Cat',
      instanceType: 't2.micro',
      instanceState: 'running',
      region: 'Singapore',
      availabilityZone: 'ap-southeast-1c',
      privateIP: '172.31.1.184',
      privateDNS: 'ip-172-31-1-184.ap-southeast-1.compute.internal',
      loadBalance: 'No'
    }
  ]
}

const serviceInfoList = {
  'i-02901c2e26147bd43': {
    name: 'Flying_Cat',
    type: 't2.micro',
    attachment: 'vol-0f3b15eadda932ae3',
    addInfo1: '13.228.95.141',
    addInfo2: 'ec2-13-228-95-141.ap-southeast-1.compute.amazonaws.com'
  },
  'vol-0f3b15eadda932ae3': {
    name: 'Flying_Cat',
    type: 'gp2',
    attachment: 'i-02901c2e26147bd43',
    addInfo1: '10 GiB',
    addInfo2: 'snap-045105f8acab4971f'
  }
}

const cloudProfileData = {
  'AWS-233703087823': {
    accountCategory: 'Student',
    accountName: 'Al Faried',
    accountEmail: 'alfariedy.2016@smu.edu.sg',
    serviceList: [
      {
        serviceID: 'i-02901c2e26147bd43',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1c'
      },
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Unavailable',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1b'
      },
      {
        serviceID: 'vol-0f3b15eadda932ae3',
        serviceType: 'Storage',
        serviceName: 'ebs-storage',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1c'
      }
    ]
  },
  'AWS-195738463829': {
    accountCategory: 'Student',
    accountName: 'Alfred',
    accountEmail: 'alfred.peng.2017@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1a'
      }
    ]
  },
  'AWS-0596847362893': {
    accountCategory: 'Student',
    accountName: 'Melvin',
    accountEmail: 'melvin.ng.2016@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1a'
      }
    ]
  },
  'AWS-837462738491': {
    accountCategory: 'Student',
    accountName: 'Fredrick',
    accountEmail: 'fredrick.tan.2016@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1c'
      }
    ]
  },
  'AWS-9473826185930': {
    accountCategory: 'Student',
    accountName: 'Aisyah',
    accountEmail: 'sitti.aisyah.2015@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1c'
      }
    ]
  },
  'AWS-8374629400573': {
    accountCategory: 'Student',
    accountName: 'J Lavinson',
    accountEmail: 'jen.lavison.2016@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1a'
      }
    ]
  },
  'AWS-746382910564': {
    accountCategory: 'Student',
    accountName: 'Junadi T',
    accountEmail: 'junadi.tan.2015@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1b'
      }
    ]
  },
  'AWS-946573810346': {
    accountCategory: 'Student',
    accountName: 'Laosai',
    accountEmail: 'laosai.li.2015@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1a'
      }
    ]
  },
  'AWS-628394017485': {
    accountCategory: 'Student',
    accountName: 'Lavita',
    accountEmail: 'lavita.singh.2016@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1a'
      }
    ]
  },
  'AWS-746503729578': {
    accountCategory: 'Student',
    accountName: 'Mambuk',
    accountEmail: 'mambuk.madi.2015@smu.edu.sg',
    serviceList: [
      {
        serviceID: '-',
        serviceType: 'Compute',
        serviceName: 'ec2-instance',
        serviceHealth: 'Available',
        serviceRegion: 'Singapore',
        serviceZone: 'ap-southeast-1a'
      }
    ]
  },
  'AWS-047583926174': {
    accountCategory: 'Student',
    accountName: 'Pei Qi',
    accountEmail: 'pei.qi.2018@smu.edu.sg',
    serviceList: []
  },
  'AWS-8573947502356': {
    accountCategory: 'Student',
    accountName: 'Billy Tay',
    accountEmail: 'billy.tay.2016@smu.edu.sg',
    serviceList: []
  },
  'AWS-364725381950': {
    accountCategory: 'Student',
    accountName: 'HML',
    accountEmail: 'hit.mon.li.2015@smu.edu.sg',
    serviceList: []
  },
  'AWS-847503829561': {
    accountCategory: 'Student',
    accountName: 'Slitva D.',
    accountEmail: 'slitva.danugaranan.2015@smu.edu.sg',
    serviceList: []
  }
}

const serverList = [{
  label: 'ESM240',
  data: [
    {
      section: 'G1',
      team: 'T3',
      projectName: 'Alfaried_Flying_Cat_Lab',
      cloudProfile: 'AWS-233703087823',
      applicationIP: '13.228.95.141',
      applicationStatus: 'Healthy',
      applicationUsage: 0.8
    },
    {
      section: 'G1',
      team: 'T1',
      projectName: 'ESM240_G1_Alfred_Lab1',
      cloudProfile: 'AWS-195738463829',
      applicationIP: '100.1.1.1',
      applicationStatus: 'Healthy',
      applicationUsage: 5
    },
    {
      section: 'G1',
      team: 'T1',
      projectName: 'G1_Melvin_Lab1',
      cloudProfile: 'AWS-0596847362893',
      applicationIP: '100.1.1.2',
      applicationStatus: 'Healthy',
      applicationUsage: 10
    },
    {
      section: 'G1',
      team: 'T1',
      projectName: 'fedrick_lab1',
      cloudProfile: 'AWS-837462738491',
      applicationIP: '100.1.1.3',
      applicationStatus: 'Down',
      applicationUsage: 0
    },
    {
      section: 'G1',
      team: 'T2',
      projectName: 'G1_Aisyah_Lab_1',
      cloudProfile: 'AWS-9473826185930',
      applicationIP: '200.1.1.1',
      applicationStatus: 'Healthy',
      applicationUsage: 22
    },
    {
      section: 'G1',
      team: 'T2',
      projectName: 'Lavinson_G1_T2_Lab1',
      cloudProfile: 'AWS-8374629400573',
      applicationIP: '200.1.1.2',
      applicationStatus: 'Down',
      applicationUsage: 0
    },
    {
      section: 'G1',
      team: 'T1',
      projectName: 'ESM240_Junadi_Lab1',
      cloudProfile: 'AWS-746382910564',
      applicationIP: '100.1.1.4',
      applicationStatus: 'Healthy',
      applicationUsage: 12
    },
    {
      section: 'G1',
      team: 'T2',
      projectName: 'Lab1_laosai_li',
      cloudProfile: 'AWS-946573810346',
      applicationIP: '200.1.1.3',
      applicationStatus: 'Healthy',
      applicationUsage: 6
    },
    {
      section: 'G1',
      team: 'T3',
      projectName: 'ESM240_Lab1_Lavita',
      cloudProfile: 'AWS-628394017485',
      applicationIP: '300.1.1.1',
      applicationStatus: 'Healthy',
      applicationUsage: 11
    },
    {
      section: 'G1',
      team: 'T3',
      projectName: 'mambukLab1',
      cloudProfile: 'AWS-746503729578',
      applicationIP: '300.1.1.2',
      applicationStatus: 'Down',
      applicationUsage: 0
    }
  ]
}]

export { serverList, cloudProfileData, serviceInfoList, applicationInfoList }
