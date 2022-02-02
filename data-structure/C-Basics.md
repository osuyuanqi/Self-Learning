The fils related to C programming language only.

- malloc() and struct
```C
struct student s* = malloc(sizeof(struct student));
(*s).name = "Luke Skywalker";//method 1
s->name = "Luke Skywalker";//method 2->same
```
- free() after malloc() immediately is a good rule.
- string ends with '\0' default, but strlen() returns without '\0'. e.g. 'cat' has 4 character, strlen("cat") will return 3 not 4.
- string can't be changed after assigned, it should always be const in C. This way could make it could raise compiler error, or the program would runtime error with a cryptic error.
