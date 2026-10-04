(function(root){
function normalize(value){return String(value||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLocaleLowerCase('en');}
function compare(reference,value){if(!normalize(reference)||!normalize(value))return 'missing';return normalize(reference)===normalize(value)?'match':'mismatch';}
function validDate(s){if(!s)return true;if(!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T00:00:00Z');return !isNaN(d)&&d.toISOString().slice(0,10)===s&&s<=new Date().toISOString().slice(0,10);}
function validate(s){return s&&s.version===1&&['bn','en'].includes(s.lang)&&s.profile&&['name','dob'].every(k=>typeof s.profile[k]==='string'&&s.profile[k].length<=200)&&validDate(s.profile.dob)&&Array.isArray(s.docs)&&s.docs.length===3&&s.docs.every(d=>d&&['name','dob'].every(k=>typeof d[k]==='string'&&d[k].length<=200)&&validDate(d.dob))&&Array.isArray(s.checks)&&s.checks.length<=50&&s.checks.every(c=>c&&typeof c.label==='string'&&c.label.length<=100&&typeof c.done==='boolean');}
const api={normalize,compare,validDate,validate};if(typeof module!=='undefined')module.exports=api;else root.FormLogic=api;
})(globalThis);
