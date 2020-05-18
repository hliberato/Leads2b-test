import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios, { delayResponse: 2000 })

mock.onGet('/api/login').reply(function (config) {
  if (config.email.toLowerCase() === 'bia@leads2b.com.br' && config.password === '123456') {
    return [200, {
      token: `Bearer eyJhbGciOiJIUzUxMiJ1.eyJqdGkiOiIxODUiLCJzdWIiOiJnYWJyaWVsYUBqdXN0dG8uY29tLmJyIiwiUEVSU09OU19JRFNfS0VZIj
      oiMTI0ODUzLDEyNDg2OSwxMjUwNzcsMTI2ODU0LDEyNjkzNiwxMjgxNjksMTI5MTU2LDEyOTI1NSwxMzI2MDUsMTQwNjQ5LDE0NDk2NiwxNTAwMTQsMTUw
      MDc3LDE1MTkyNiwxNTE5MzIsMTUxOTM4LDE1MTk0NCwxNTI1MjAsMTUzODU5LDE1NTgxNywxNjAyMzQsMTYwNDMzLDE2MTE4MywxNjExOTcsMTYxMzMwLD
      E2MzI5MSwxNjQzNzMsMTY0NjU0LDE2ODgzNiw0OTYyOSw1MDY1NSw4Nzc0Miw4Nzc0NCw4Nzc0NSw4Nzc1OSw4Nzc2NCw4Nzc2NSw4ODA2OCw5MDQ3MCw5
      MTMyMSw5MTUwMSw5MTY1Nyw5MTY3Myw5MTg5MSw5NTMxNyw5Njc0OSw5ODQyNiwxMDEwODAsMTAxNDI3LDEwMjIzMywxMDUxODEsMTA2MDM0LDEwNjA0OS
      wxMDk2ODAsMTEyMDE2LDExNjU0MCwxMTc0OTUsMTE3NDk2LDExNzQ5NywxMTc0OTgsMTE3NDk5LDExNzUwMCwxMTc1MDEsMTE3NTAyLDExNzUwMywxMTc1
      MDQsMTE3NTA2LDExNzUwNywxMTg2ODMsMTIxMTI5LDEyMTIwMCwxMjIwNDUsMTI0Njg5IiwiZXhwIjoxNTg5NjU3NzQ3fQ.7Dnt2HkMw7AeJ7nqH-0oAAK
      pHM2cIrOBGqlOlFXr0qCCXVaDzLUUqeLRfsYTfDTDe4wKwDpVuHJtHBpRc7ZGhA`
    }]
  }
  return [403, {}]
})

mock.onGet('/api/employee').reply(200, [
  { id: 1, firstName: 'Caspar', lastName: 'Cragoe', email: 'ccragoe0@networkadvertising.org', function: 'Data Coordiator', active: false },
  { id: 2, firstName: 'Cooper', lastName: 'Reisenberg', email: 'creisenberg1@sourceforge.net', function: 'Environmental Specialist', active: true },
  { id: 3, firstName: 'Anabella', lastName: 'Rikel', email: 'arikel2@edublogs.org', function: 'Senior Developer', active: true },
  { id: 4, firstName: 'Rey', lastName: 'Keefe', email: 'rkeefe3@bbb.org', function: 'Occupational Therapist', active: true },
  { id: 5, firstName: 'Allen', lastName: 'Faber', email: 'afaber4@furl.net', function: 'Senior Cost Accountant', active: true },
  { id: 6, firstName: 'Jerry', lastName: 'Berling', email: 'jberling5@is.gd', function: 'Engineer', active: false },
  { id: 7, firstName: 'Corty', lastName: 'Aysh', email: 'caysh6@blog.com', function: 'Senior Financial Analyst', active: true },
  { id: 8, firstName: 'Gayel', lastName: 'Tantrum', email: 'gtantrum7@zdnet.com', function: 'Account Representative', active: false },
  { id: 9, firstName: 'Marlin', lastName: 'Japp', email: 'mjapp8@pinterest.com', function: 'Geologist', active: true },
  { id: 10, firstName: 'Marty', lastName: 'Astill', email: 'mastill9@npr.org', function: 'Tax Accountant', active: false },
  { id: 11, firstName: 'Luther', lastName: 'Guiton', email: 'lguitona@domainmarket.com', function: 'Speech Pathologist', active: false },
  { id: 12, firstName: 'Noel', lastName: 'Izzatt', email: 'nizzattb@nbcnews.com', function: 'Occupational Therapist', active: false },
  { id: 13, firstName: 'Kamillah', lastName: 'Dawidowitsch', email: 'kdawidowitschc@sciencedaily.com', function: 'Payment Adjustment Coordinator', active: false },
  { id: 14, firstName: 'Valera', lastName: 'Bruno', email: 'vbrunod@lycos.com', function: 'Media Manager', active: true },
  { id: 15, firstName: 'Pearl', lastName: 'Gammel', email: 'pgammele@cdbaby.com', function: 'Sales Representative', active: true },
  { id: 16, firstName: 'Timotheus', lastName: 'Vasyukhnov', email: 'tvasyukhnovf@ox.ac.uk', function: 'Business Systems Development Analyst', active: false },
  { id: 17, firstName: 'Karmen', lastName: 'Unitt', email: 'kunittg@example.com', function: 'Editor', active: false },
  { id: 18, firstName: 'Adelheid', lastName: 'Stockney', email: 'astockneyh@wunderground.com', function: 'Safety Technician', active: true },
  { id: 19, firstName: 'Wynn', lastName: 'Wand', email: 'wwandi@google.com', function: 'Computer Systems Analyst', active: true },
  { id: 20, firstName: 'Clarinda', lastName: 'Awcock', email: 'cawcockj@archive.org', function: 'Social Worker', active: true },
  { id: 21, firstName: 'Ashlan', lastName: 'Kenaway', email: 'akenawayk@jugem.jp', function: 'VP Marketing', active: false },
  { id: 22, firstName: 'Sergei', lastName: 'Royans', email: 'sroyansl@constantcontact.com', function: 'Help Desk Technician', active: true },
  { id: 23, firstName: 'Petr', lastName: 'Fourcade', email: 'pfourcadem@google.nl', function: 'Safety Technician', active: true },
  { id: 24, firstName: 'Lionello', lastName: 'Trace', email: 'ltracen@usgs.gov', function: 'Assistant Media Planner', active: true },
  { id: 25, firstName: 'Dorrie', lastName: 'Gearty', email: 'dgeartyo@paginegialle.it', function: 'Compensation Analyst', active: false },
  { id: 26, firstName: 'Thadeus', lastName: 'Cawsby', email: 'tcawsbyp@soup.io', function: 'Programmer Analyst', active: true },
  { id: 27, firstName: 'Lin', lastName: 'Chasmer', email: 'lchasmerq@prnewswire.com', function: 'Graphic Designer', active: false },
  { id: 28, firstName: 'Oren', lastName: 'Klimecki', email: 'oklimeckir@pcworld.com', function: 'Senior Developer', active: false },
  { id: 29, firstName: 'Sammy', lastName: 'Salisbury', email: 'ssalisburys@blogs.com', function: 'Community Outreach Specialist', active: false },
  { id: 30, firstName: 'Ernesta', lastName: 'MacFie', email: 'emacfiet@wsj.com', function: 'Staff Scientist', active: false },
  { id: 31, firstName: 'Dana', lastName: 'Dudney', email: 'ddudneyu@google.com.au', function: 'Physical Therapy Assistant', active: false },
  { id: 32, firstName: 'Robinson', lastName: 'Muino', email: 'rmuinov@chronoengine.com', function: 'Technical Writer', active: true },
  { id: 33, firstName: 'Callean', lastName: 'Slobom', email: 'cslobomw@hc360.com', function: 'Physical Therapy Assistant', active: true },
  { id: 34, firstName: 'Xavier', lastName: 'Foulks', email: 'xfoulksx@arizona.edu', function: 'Computer Systems Analyst', active: true },
  { id: 35, firstName: 'Fergus', lastName: 'Warmisham', email: 'fwarmishamy@biglobe.ne.jp', function: 'Software Consultant', active: true },
  { id: 36, firstName: 'Arleta', lastName: 'Deary', email: 'adearyz@wordpress.com', function: 'Automation Specialist', active: false },
  { id: 37, firstName: 'Pete', lastName: 'Jagiello', email: 'pjagiello10@youku.com', function: 'Clinical Specialist', active: false },
  { id: 38, firstName: 'Simeon', lastName: 'Korbmaker', email: 'skorbmaker11@friendfeed.com', function: 'Pharmacist', active: true },
  { id: 39, firstName: 'Edi', lastName: 'Antonescu', email: 'eantonescu12@goo.gl', function: 'Account Executive', active: true },
  { id: 40, firstName: 'Angela', lastName: 'Daintry', email: 'adaintry13@jalbum.net', function: 'Environmental Tech', active: true }
])

mock.onPut('/api/employee').reply(function (config) {
  return [200, config.data]
})

mock.onPost('/api/employee').reply(function (config) {
  return [200, config.data]
})

mock.onDelete('/api/employee').reply(function (config) {
  return [200, config.employeeId]
})

mock.onGet('/api/employee/functions').reply(200, [
  'Data Coordiator',
  'Environmental Specialist',
  'Senior Developer',
  'Occupational Therapist',
  'Senior Cost Accountant',
  'Engineer',
  'Senior Financial Analyst',
  'Account Representative',
  'Geologist',
  'Tax Accountant',
  'Speech Pathologist',
  'Payment Adjustment Coordinator',
  'Media Manager',
  'Sales Representative',
  'Business Systems Development Analyst',
  'Editor',
  'Safety Technician',
  'Social Worker',
  'VP Marketing',
  'Help Desk Technician',
  'Environmental Tech',
  'Account Executive',
  'Pharmacist',
  'Clinical Specialist',
  'Automation Specialist',
  'Software Consultant',
  'Computer Systems Analyst',
  'Physical Therapy Assistant',
  'Technical Writer',
  'Staff Scientist',
  'Community Outreach Specialist',
  'Graphic Designer',
  'Programmer Analyst',
  'Compensation Analyst',
  'Assistant Media Planner'
])
