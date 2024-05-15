import{C as d}from"./fd-BqDsHJLD.js";import{c as m}from"./index-hsG4DW0V.js";import{d as h,G as u,g,o as l,a as r,b as e,N as p,Q as f,e as n,u as a,L as i,K as o,R as b}from"./vendor-70biTZpe.js";const y="/workshop-bfocm/assets/BFoCM-java-bytecode-DB21QsSY.svg",_=`// event_loop.js
const first  = () => console.log("first");
const second = () => console.log("second (timeout)");
const third  = () => console.log("third (while loop)");

first();
// The global setTimeout() method sets a timer which
// executes a function or specified piece of code once
// the timer expires.
setTimeout(second, 0);

const startTime = new Date();
// endTime is 10ms later than startTime
const endTime   = new Date(startTime.getTime() + 10);

while (new Date() < endTime) {
	third();
}

`,v=`$ node event_loop.js
first
third (while loop)
third (while loop)
third (while loop)
.....
third (while loop)
third (while loop)
second (timeout)
`,w=`NAME
    open, openat, creat - open and possibly create a file

SYNOPSIS
    int open(const char *pathname, int flags);

DESCRIPTION
    The open() system call opens the file specified by pathname.
    If the specified  file  does  not  exist, it may optionally
    (if O_CREAT is specified in flags) be created by open().

    The  return  value of open()  is a file descriptor, a small,
    nonnegative integer that  is used in subsequent system calls
    (read(2),  write(2), lseek(2),  fcntl(2),  etc.) to refer to
    the open file. The file descriptor returned by a successful
    call will be the lowest-numbered file descriptor not curren-
    tly open for the process.
`,C=`fs.open(path[, flags[, mode]], callback)

* path <string> | <Buffer> | <URL>
* flags <string> | <number> See support of file system flags.
  Default: 'r'.
* mode <string> | <integer> Default: 0o666 (readable and writable)
* callback <Function>
    * err <Error>
    * fd <integer>

    Asynchronous file open. See the POSIX open(2) documentation
    for more details.

    mode sets  the  file mode (permission and sticky bits), but
    only  if the file was created.  On Windows,  only the write
    permission can be manipulated; see fs.chmod().

`,N=`os.open(path, flags, mode=0o777, *, dir_fd=None)

    Open the file  path  and  set various  flags according to
	flags  and  possibly  its  mode according  to mode.  When
	computing  mode,  the current umask value is first masked
	out. Return the file descriptor for the newly opened file.
	The new file descriptor is non-inheritable.

    For a description of the flag and mode values, see the C
	run-time documentation; flag constants (like O_RDONLY and
	O_WRONLY) are defined in the os module. In particular, on
	Windows adding O_BINARY is needed to open files in binary
	mode.
`,k=i('<section><h3>A Glance of High Level</h3><h3>Programming Languages</h3></section><section><h3>New Features</h3><ul><li>Object-oriented programming</li><li>Standard libraries w/ rich features</li><li>Functional programming</li><li>Cross-platform</li><li>Less knowledge about memory or compilation</li></ul></section><section><h3>Java</h3><h4>Write Once, Run Anywhere</h4></section><section><h3>Java Virtural Machine</h3><h4>Another Abstraction</h4><div class="flex justify-center"><img data-src="'+y+'"></div></section>',4),O=e("h3",null,"Languages atop the JVM",-1),A={class:"flex justify-evenly icon-container items-center"},T={class:"flex flex-col items-center"},J=["data-src"],j={class:"text-3xl"},L=i("<section><h3>Some JVM Implementations</h3><table><tr><td>HotSpot</td><td>Open Source</td></tr><tr><td>GraalVM</td><td>Open Source</td></tr><tr><td>OpenJ9</td><td>Open Source</td></tr><tr><td>JRocket</td><td>Proprietary, Discontinued</td></tr><tr><td>Microsoft JVM</td><td>Proprietary, Discontinued</td></tr></table></section><section><h3>Highlights of JVM</h3><ul><li>Platform Independence</li><li>Object-Oriented</li><li>JIT: Just-In-Time compilation</li><li>Security</li><li>Robust Ecosystem</li></ul></section><section data-auto-animate><h3>No Free Lunch</h3><ul><li>Full GC is a Stop-The-World (STW) event</li><li>Generics (J2SE 5.0) / Lambda Expression (Java 8)</li><li>Understanding JVM</li></ul></section><section data-auto-animate><h3>No Free Lunch</h3><div>No only in JVM...</div></section>",4),S={"data-auto-animate":""},x=e("h3",null,"Event Loop in Node.js",-1),E={"data-auto-animate":""},I=e("h3",null,"Event Loop in Node.js",-1),M=i('<section><h3>General JVM Implementations</h3><table><tr><td></td><td><a href="https://github.com/openjdk/jdk">OpenJDK</a></td><td><a href="https://github.com/oracle/graal">GraalVM</a></td><td><a href="https://github.com/eclipse-openj9/openj9">OpenJ9</a></td></tr><tr><td>Java</td><td>74.6%</td><td>91.6%</td><td>42.5%</td></tr><tr><td>C</td><td>7.2%</td><td>3.7%</td><td>18.8%</td></tr><tr><td>C++</td><td>13.7%</td><td>0.4%</td><td>34.3%</td></tr></table></section><section><h3>Reminisce for a Moment</h3><div>It&#39;s possible to compile C<br>and assembly language togother.</div><div class="fragment">As Java is implemented with C/C++,</div><div class="fragment">is it possible to invoke functions<br>defined in C/C++ from Java, and vice versa?</div></section><section><h3>Yes</h3><div>Java, Python, Node.js, ...</div></section>',3),P=e("div",null,[o("Now let's take a look at this code for the "),e("span",{class:"text-red-500"},"4th"),o(" time")],-1),R=e("h3",null,[e("span",{class:"mono"},"open(2)")],-1),V=e("h3",null,[e("a",{href:"https://nodejs.org/api/fs.html#fsopenpath-flags-mode-callback",class:"mono"},"fs.open()"),o(" in Node.js")],-1),D=e("h3",null,[e("a",{href:"https://docs.python.org/3/library/os.html#os.open",class:"mono"},"os.open()"),o(" in Python")],-1),G=i('<section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>C</td><td><ul><li class="fragment">simple syntax</li><li class="fragment">close to hardware</li><li class="fragment">manual memory management</li><li class="fragment">compiled ahead-of-time</li><li class="fragment">operating systems, embedded systems, and system programming</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>C++</td><td><ul><li class="fragment">more complex than C</li><li class="fragment">comparable to C with optimizations and abstractions</li><li class="fragment">manual memory management with RAII, smart pointers and automatic memory management</li><li class="fragment">compiled ahead-of-time</li><li class="fragment">system/software, game, simulations</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Java</td><td><ul><li class="fragment">Object-oriented, high-level</li><li class="fragment">Generally slower than C/C++, but JIT can optimise</li><li class="fragment">Automatic garbage collection</li><li class="fragment">Rich standard library, 3rd party libraries and frameworks</li><li class="fragment">Enterprise applications, web services, Android apps</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Python</td><td><ul><li class="fragment">High-level, readable</li><li class="fragment">Slower than compiled languages (REPL)</li><li class="fragment">Automatic garbage collection</li><li class="fragment">Rich libraries and frameworks for web, data analysis, AI, scientific computing</li><li class="fragment">Web, data science, AI/ML, scripting, rapic prototyping</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Node.js</td><td><ul><li class="fragment">High-level, involving</li><li class="fragment">Generally good for I/O tasks due to its non-blocking, event-driven architecture. Use V8 JIT to compile to bytecode first, then compile to machine code.</li><li class="fragment">Automatic garbage collection from V8</li><li class="fragment">Large ecosystem, several package managers</li><li class="fragment">Web, RESTful APIs, microservices</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Rust</td><td><ul><li class="fragment">A young language with complex syntax</li><li class="fragment">Comparable to C/C++ w/ safety guarantees</li><li class="fragment">Compile ahead-of-time</li><li class="fragment">Without GC through its ownership and borrowing system</li><li class="fragment">System programming, web assembly, embedded systems</li></ul></td></tr></table></section>',6),H=h({__name:"high-level-languages",setup(W){const c=[{name:"Scala",icon:"scala/scala-original.svg"},{name:"Kotlin",icon:"kotlin/kotlin-original.svg"},{name:"Clojure",icon:"clojure/clojure-original.svg"},{name:"Groovy",icon:"groovy/groovy-original.svg"},{name:"JRuby",icon:"ruby/ruby-original.svg"},{name:"JPython",icon:"python/python-original.svg"}];return u(()=>{m()}),(F,Q)=>{const t=g("highlightjs");return l(),r("section",null,[k,e("section",null,[O,e("div",A,[(l(),r(p,null,f(c,s=>e("div",T,[e("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${s.icon}`},null,8,J),e("span",j,b(s.name),1)])),64))])]),L,e("section",S,[x,n(t,{language:"javascript",autodetect:!1,code:a(_)},null,8,["code"])]),e("section",E,[I,n(t,{language:"plaintext",autodetect:!1,code:a(v)},null,8,["code"])]),M,e("section",null,[P,n(t,{language:"c",autodetect:!1,code:a(d)},null,8,["code"])]),e("section",null,[R,n(t,{language:"plaintext",autodetect:!1,code:a(w)},null,8,["code"])]),e("section",null,[V,n(t,{language:"plaintext",autodetect:!1,code:a(C)},null,8,["code"])]),e("section",null,[D,n(t,{language:"plaintext",autodetect:!1,code:a(N)},null,8,["code"])]),G])}}});export{H as default};
