import{c as d,_ as r}from"./index-BO1U6PcM.js";import{C as i}from"./fd-BqDsHJLD.js";import{C as c}from"./main-D5lLZQFH.js";import{d as u,G as h,g,o as _,a as f,b as e,e as s,u as n,i as p,j as m,K as l}from"./vendor-CuhU66Da.js";const T=`#include <stdio.h>

int main() {
	fprintf(stdout, "hello world\\n");
	return 0;
}

`,v=`Console.WriteLine("This message is logged to stdout");
Console.Error.WriteLine("This error is logged to stderr");
`,P=`System.out.println("This message is logged to stdout");
System.err.println("This error is logged to stderr");
`,C=`console.log('This message is logged to stdout');
console.error('This error is logged to stderr');
`,x=`print("This message is logged to stdout")

import sys
sys.stderr.write("This error is logged to stderr\\n")
print("This error is logged to stderr", file=sys.stderr)
`,t=a=>(p("data-v-d8923fb9"),a=a(),m(),a),y=t(()=>e("div",null,"Now let's take a look at this code for the third time",-1)),O=t(()=>e("section",null,[e("h3",null,"The Default Streams"),e("ul",null,[e("li",null,[l("0 - "),e("code",null,"stdin")]),e("li",null,[l("1 - "),e("code",null,"stdout")]),e("li",null,[l("2 - "),e("code",null,"stderr")])])],-1)),U={class:"column-2"},N=t(()=>e("section",null,[e("h3",null,"Do You Remember the Python Workshop?")],-1)),S=t(()=>e("div",null,"C#",-1)),b=t(()=>e("div",null,"Java",-1)),w=t(()=>e("div",null,"JavaScript",-1)),E=t(()=>e("div",null,"Python",-1)),I=t(()=>e("div",null,"You might have also seen this from somewhere",-1)),k=t(()=>e("ul",null,[e("li",{class:"fragment"},[e("code",null,"`./a.out`"),l(" execute the file a.out in the current directory")]),e("li",{class:"fragment"},[e("code",null,"`> out.txt`"),l(" redirect the stdout stream to the file out.txt")]),e("li",{class:"fragment"},[e("code",null,"`2>/dev/null`"),l(" redirect the stderr stream to the file /dev/null")]),e("li",{class:"fragment"},[e("code",null,"`&`"),l(" execute the file in the background")])],-1)),j=t(()=>e("section",null,[e("div",null,[l("Now you see a program can get data from "),e("code",null,"stdin"),l(" and return data to "),e("code",null,"stdout")]),e("div",{class:"fragment"},"What if I want to use the output of a program as the input of another?")],-1)),D=t(()=>e("h3",null,"Pipe",-1)),J=`$ ./a.out
The file discriptor is 3`,W=u({__name:"printf",setup(a){return h(()=>{d()}),(B,F)=>{const o=g("highlightjs");return _(),f("section",null,[e("section",null,[y,s(o,{language:"c",autodetect:!1,code:n(i)},null,8,["code"]),s(o,{language:"plaintext",autodetect:!1,code:J})]),O,e("section",null,[e("div",U,[e("div",null,[s(o,{language:"c",autodetect:!1,code:n(c)},null,8,["code"])]),e("div",null,[s(o,{language:"c",autodetect:!1,code:n(T)},null,8,["code"])])])]),N,e("section",null,[S,s(o,{language:"csharp",autodetect:!1,code:n(v)},null,8,["code"]),b,s(o,{language:"java",autodetect:!1,code:n(P)},null,8,["code"])]),e("section",null,[w,s(o,{language:"javascript",autodetect:!1,code:n(C)},null,8,["code"]),E,s(o,{language:"python",autodetect:!1,code:n(x)},null,8,["code"])]),e("section",null,[I,s(o,{language:"bash",autodetect:!1,code:"./a.out > out.txt 2>/dev/null &"}),k]),j,e("section",null,[D,s(o,{language:"bash",autodetect:!1,code:'ls | grep "foo" | grep "bar"'})])])}}}),A=r(W,[["__scopeId","data-v-d8923fb9"]]);export{A as default};
