const AI = require("../utils/AIFun");

sendvCards = (req, res) => {

    if(req.file.size === 0) {
        return res.status(400).json({
            error: "empty file uploaded"
        });
    }

    let vcf_orginal = req.file.buffer.toString('utf-8');
    let vcf_clean = vcf_orginal.replaceAll('\r\n', '\n');
    let vcf_phase1 = vcf_clean.split('\n');


    res.json({
        vcf_orginal: vcf_orginal,
        vcf_clean: vcf_clean,
        vcf_phase1: vcf_phase1,
        vCards: vcfToJson(vcf_orginal),
        AI: AI(vcf_orginal)
    })
}


function vcfToJson(vcf_orginal) {

    const vcf_clean = vcf_orginal.replaceAll('\r\n', '\n');
    const vcf_phase1 = vcf_clean.split('\n');

}


module.exports = sendvCards ;

// BEGIN:VCARD
// VERSION:2.1
// N:Hotline;Carlcare;Service;;
// FN:Carlcare Service Hotline
// TEL;WORK;PREF:042-111-999666
// EMAIL;WORK:service@carlcare.com
// URL:www.carlcare.com
// NOTE:Facebook: CarlcareService
// END:VCARD
