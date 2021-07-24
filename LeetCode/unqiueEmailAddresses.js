const numUniqueEmails = emails => {
    let emailSet = new Set();
    for (let i=0; i < emails.length; i++) {
        const address = normalizeEmail(emails[i]);
        emailSet.add(address);
    }
    return emailSet.size;
};

const normalizeEmail = email => {
    let [local, domain] = email.split("@");
    local = local.replace(/(\.)|(\+.*)/g, "");
    return local + "@" + domain;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); //2