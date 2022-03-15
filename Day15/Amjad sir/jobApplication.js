const getJobApp = (cName,postName,applName) => `
Respected HR,
${cName}
I would like to apply for the position of ${postName}. please consider my profile for ${postName}.
Thanks and Regards,
${applName}`
console.log(getJobApp("TCS,India","Full Stack Developer","Dnyaneshwar kirtankar"));