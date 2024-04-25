import{c as d,_ as c}from"./index-BO1U6PcM.js";import{d as i,G as f,g as r,o as l,a as h,b as t,e,u as n,L as u,i as _,j as p}from"./vendor-CuhU66Da.js";const v="/workshop-bfocm/assets/premium_photo-1679255807252-3c568399dfc2-DQyoh-xX.avif",m="/workshop-bfocm/assets/Tower_of_Hanoi-CluCuWxr.jpeg",x="/workshop-bfocm/assets/BFoCM-memory-hierarchy-De5H_NOY.png",g=`#include <stdio.h>  // printf
#include <stdlib.h> // malloc and free

int main() {
	int *x = (int *) malloc(sizeof(int));
	printf("The address of x  is %p\\n", &x);
	printf("The address of *x is %p\\n",  x);
	free(x);
	return 0;
}

`,T=`#include <stdio.h> // printf

int main() {
	int x;
	printf("The size of x is %ld byte(s)\\n", sizeof(int));
	printf("The address of x is %p\\n", &x);
	return 0;
}

`,y=`#include <stdio.h>
#include <stdlib.h>
#define VAR_SIZE 0x10
#define MAX_FRAME 5

int g_count = 0;

void foo() {
	if (g_count == MAX_FRAME)
		return;

	char s1[VAR_SIZE], *s2;
	s2 = (char *) malloc(VAR_SIZE * sizeof(char));
	printf("=== %d ===\\n", g_count);
	printf("The address of s1 is             %p\\n", &s1);
	printf("The address of s2 is             %p\\n", &s2);
	printf("The address that s2 points to is %p\\n",  s2);

	g_count++;
	foo();
	free(s2);
}

int main() {
	foo();
	return 0;
}

`,b=`#include <stdio.h>
#define SIZE 3

int main() {
	int a[SIZE];
	int i;

	printf("The address of a    is %p\\n", &a);
	for (i = 0; i < SIZE; i++) {
		printf("The address of a[%d] is %p\\n",
			i,
			&a[i]
		);
	}

	return 0;
}

`,A=`#include <stdio.h>
#define SIZE 3

int main() {
	int a[SIZE];
	int i;

	for (i = 0; i < SIZE; i++) {
		printf("The value of a[%d] is %d\\n",
		i,
		a[i]);
	}

	return 0;
}

`,R=`#include <stdio.h>

int main() {
	int x, *p;

	x = 42;
	p = &x;

	printf("The address of x is %p\\n", &x);
	printf("The address of p is %p\\n", &p);
	printf("The value   of p is %p\\n", p);
	printf("The value p points to is %d\\n", *p);

	return 0;
}

`,k=`$ ./addr_var_heap
The address of x  is 0x7ffedb7516c0
The address of *x is 0x61f42dfc92a0
`,I=`$ ./addr_var_recursive
=== 0 ===
The address of s1 is             0x7ffc1b25a6b0
The address of s2 is             0x7ffc1b25a6a8
The address that s2 points to is 0x632de61e72a0
=== 1 ===
The address of s1 is             0x7ffc1b25a670
The address of s2 is             0x7ffc1b25a668
The address that s2 points to is 0x632de61e76d0
=== 2 ===
The address of s1 is             0x7ffc1b25a630
The address of s2 is             0x7ffc1b25a628
The address that s2 points to is 0x632de61e76f0
=== 3 ===
The address of s1 is             0x7ffc1b25a5f0
The address of s2 is             0x7ffc1b25a5e8
The address that s2 points to is 0x632de61e7710
=== 4 ===
The address of s1 is             0x7ffc1b25a5b0
The address of s2 is             0x7ffc1b25a5a8
The address that s2 points to is 0x632de61e7730
`,D=`$ ./addr_var_stack
The size of x is 4 byte(s)
The address of x is 0x7ffde0c2a054
`,E=`$ ./array
The address of a    is 0x7ffdbcba285c
The address of a[0] is 0x7ffdbcba285c
The address of a[1] is 0x7ffdbcba2860
The address of a[2] is 0x7ffdbcba2864
`,S=`$ ./array_uninitialized
The value of a[0] is 0
The value of a[1] is 4096
The value of a[2] is 0
`,w=`$ ./pointer
The address of x is 0x7fff90062e4c
The address of p is 0x7fff90062e50
The value   of p is 0x7fff90062e4c
The value p points to is 42
`,s=o=>(_("data-v-967555fc"),o=o(),p(),o),C=s(()=>t("section",null,[t("div",null,"With C you don't have to deal with registers or instructions."),t("div",{class:"fragment"},"But you still need to take care of memory."),t("div",{class:"fragment"},"Let's get hands dirty.")],-1)),O=s(()=>t("h3",null,"Address of Variable",-1)),H=s(()=>t("h3",null,"Hi, Pointer",-1)),U={class:"flex"},P={class:"w-1/2"},M={class:"w-1/2"},V={"data-auto-animate":""},N=s(()=>t("h3",null,"Hi, Array",-1)),z={class:"flex"},Z={class:"w-1/2"},L={class:"w-1/2"},j={"data-auto-animate":""},F=s(()=>t("h3",null,"Hi, Array",-1)),Y={class:"flex"},$={class:"w-1/2"},B={class:"w-1/2"},W=s(()=>t("h3",null,"Allocate and Free Dynamic Memory",-1)),X={"data-auto-animate":""},G=s(()=>t("h3",null,"Let's Make It SPICER",-1)),K={"data-auto-animate":""},Q=s(()=>t("h3",null,"Let's Make It SPICER",-1)),q=u('<section data-auto-animate data-v-967555fc><h3 data-v-967555fc>Hi Stack</h3><div class="flex justify-center" data-v-967555fc><img data-src="'+v+'" data-v-967555fc></div></section><section data-auto-animate data-v-967555fc><h3 data-v-967555fc>Hi Stack</h3><div data-v-967555fc>Tower of Hanoi</div><div class="flex justify-center" data-v-967555fc><img data-src="'+m+'" data-v-967555fc></div><div class="fragment" data-v-967555fc>First-In-Last-Out (or Last-In-First-Out)</div></section><section data-auto-animate data-v-967555fc><h3 data-v-967555fc>Memory Hierarchy</h3><img data-src="'+x+'" data-v-967555fc></section><section data-auto-animate data-v-967555fc><h3 data-v-967555fc>Memory Hierarchy</h3><table class="memory-hierarchy" data-v-967555fc><tr data-v-967555fc><td style="text-align:right;" data-v-967555fc>0.5ns</td><td data-v-967555fc>L1 Cache</td><td class="fragment" data-fragment-index="1" data-v-967555fc>0.5s</td></tr><tr data-v-967555fc><td data-v-967555fc>7ns</td><td data-v-967555fc>L2 Cache</td><td class="fragment" data-fragment-index="1" data-v-967555fc>7s</td></tr><tr data-v-967555fc><td data-v-967555fc>100ns</td><td data-v-967555fc>DRAM</td><td class="fragment" data-fragment-index="1" data-v-967555fc>100s</td></tr><tr data-v-967555fc><td data-v-967555fc>150µs</td><td data-v-967555fc>SSD</td><td class="fragment" data-fragment-index="1" data-v-967555fc>1.7 days</td></tr><tr data-v-967555fc><td data-v-967555fc>10ms</td><td data-v-967555fc>HDD</td><td class="fragment" data-fragment-index="1" data-v-967555fc>16.5 weeks</td></tr></table></section><section data-v-967555fc><h3 data-v-967555fc>Stack</h3><ul style="font-size:30px;" data-v-967555fc><li class="fragment" data-v-967555fc>When a function is called, a block is reserved on the top of stack for local variables and some bookkeeping data.</li><li class="fragment" data-v-967555fc>When that function returns, the block becomes unused and can be reused for another function call.</li><li class="fragment" data-v-967555fc>In most computer architectures, there is a special register known as the <span class="text-red-500" data-v-967555fc>stack pointer</span> register.</li><li class="fragment" data-v-967555fc>The most recently used data (i.e. the data on the top of the stack) is likely to be the data needed next, it tends to stay in the CPU cache.</li></ul></section><section data-v-967555fc><h3 data-v-967555fc>Heap</h3><ul style="font-size:30px;" data-v-967555fc><li class="fragment" data-v-967555fc>Is another region of memory managed by the operating system for dynamic memory allocation. (<code data-v-967555fc>`malloc()` / `calloc()` / `realloc()`</code>)</li><li class="fragment" data-v-967555fc>The compiler needs to know how much memory to allocate in a function, so you can&#39;t declare an array of unknown size on the stack.</li><li class="fragment" data-v-967555fc>Sometime you also need to use a space to keep data for longer time the function in which it&#39;s created.</li><li class="fragment" data-v-967555fc>Don&#39;t forget to call <code data-v-967555fc>`free()`</code>, otherwise it would cause memory leak.</li></ul></section><section data-v-967555fc><h3 data-v-967555fc>Now You May Have a Guess</h3><h3 data-v-967555fc>of Stack Overflow</h3></section>',7),J=i({__name:"stack-heap",setup(o){return f(()=>{d()}),(tt,at)=>{const a=r("highlightjs");return l(),h("section",null,[C,t("section",null,[O,e(a,{language:"c",autodetect:!1,code:n(T)},null,8,["code"]),e(a,{language:"plaintext",autodetect:!1,code:n(D)},null,8,["code"])]),t("section",null,[H,t("div",U,[t("div",P,[e(a,{language:"c",autodetect:!1,code:n(R)},null,8,["code"])]),t("div",M,[e(a,{language:"plaintext",autodetect:!1,code:n(w)},null,8,["code"])])])]),t("section",V,[N,t("div",z,[t("div",Z,[e(a,{language:"c",autodetect:!1,code:n(b)},null,8,["code"])]),t("div",L,[e(a,{language:"plaintext",autodetect:!1,code:n(E)},null,8,["code"])])])]),t("section",j,[F,t("div",Y,[t("div",$,[e(a,{language:"c",autodetect:!1,code:n(A)},null,8,["code"])]),t("div",B,[e(a,{language:"plaintext",autodetect:!1,code:n(S)},null,8,["code"])])])]),t("section",null,[W,e(a,{language:"c",autodetect:!1,code:n(g)},null,8,["code"]),e(a,{language:"plaintext",autodetect:!1,code:n(k)},null,8,["code"])]),t("section",X,[G,e(a,{language:"c",autodetect:!1,code:n(y)},null,8,["code"])]),t("section",K,[Q,e(a,{language:"plaintext",autodetect:!1,code:n(I)},null,8,["code"])]),q])}}}),st=c(J,[["__scopeId","data-v-967555fc"]]);export{st as default};
