window.advancedQuestions = [
    // 理论题（30道）
    {
        question: "关于结构体，以下说法错误的是？",
        options: ["可以包含多个不同类型的成员", "可以嵌套定义", "必须包含构造函数", "可以定义成员函数"],
        answer: 2,
        explanation: "结构体不必须包含构造函数，可以使用默认的成员初始化"
    },
    {
        question: "在C++中，结构体和类的主要区别是？",
        options: ["功能不同", "语法不同", "默认访问权限不同", "内存分配方式不同"],
        answer: 2,
        explanation: "结构体默认成员为public，类默认成员为private，这是主要区别"
    },
    {
        question: "指针的大小取决于什么？",
        options: ["数据类型", "操作系统", "变量大小", "编译器"],
        answer: 1,
        explanation: "指针大小取决于操作系统的位数，32位系统为4字节，64位系统为8字节"
    },
    {
        question: "以下哪个不是指针的特性？",
        options: ["存储地址", "可以运算", "自动释放内存", "可以为空"],
        answer: 2,
        explanation: "指针不会自动释放内存，需要手动管理或使用智能指针"
    },
    {
        question: "关于空指针，以下说法正确的是？",
        options: ["指向0地址", "不能被删除", "可以访问成员", "等于void指针"],
        answer: 0,
        explanation: "空指针指向地址0，是一个特殊的指针值，表示不指向任何有效对象"
    },
    {
        question: "结构体对齐的主要目的是什么？",
        options: ["节省内存", "提高性能", "增加安全性", "方便访问"],
        answer: 1,
        explanation: "结构体对齐主要是为了提高内存访问效率，CPU访问对齐的数据更快"
    },
    {
        question: "以下哪个不是指针运算？",
        options: ["加法", "减法", "乘法", "比较"],
        answer: 2,
        explanation: "指针支持加法（移动指针）、减法（指针间距离）和比较运算，不支持乘法"
    },
    {
        question: "关于this指针，以下说法错误的是？",
        options: ["指向当前对象", "可以为空", "是常量指针", "只能在成员函数中使用"],
        answer: 1,
        explanation: "this指针永远不为空，它指向调用成员函数的对象"
    },
    {
        question: "野指针产生的原因是什么？",
        options: ["指针未初始化", "指针已删除未置空", "两者都是", "指针为空"],
        answer: 2,
        explanation: "野指针可能由于未初始化或指向的内存已释放但指针未置空导致"
    },
    {
        question: "结构体的大小可能是多少？",
        options: ["成员大小之和", "最大成员大小", "大于成员大小之和", "小于成员大小之和"],
        answer: 2,
        explanation: "由于对齐要求，结构体的大小可能大于所有成员大小之和"
    },
    {
        question: "指针数组和数组指针的区别是什么？",
        options: ["完全相同", "存储内容不同", "声明方式不同", "以上都不是"],
        answer: 1,
        explanation: "指针数组存储多个指针，数组指针指向一个数组"
    },
    {
        question: "关于结构体的初始化，以下说法错误的是？",
        options: ["可以使用大括号", "可以部分初始化", "必须全部初始化", "可以使用构造函数"],
        answer: 2,
        explanation: "结构体可以只初始化部分成员，未初始化的成员将使用默认值"
    },
    {
        question: "以下哪个不是智能指针的类型？",
        options: ["unique_ptr", "shared_ptr", "weak_ptr", "normal_ptr"],
        answer: 3,
        explanation: "C++标准库提供unique_ptr、shared_ptr和weak_ptr，没有normal_ptr"
    },
    {
        question: "void指针的特点是什么？",
        options: ["可以指向任何类型", "可以直接解引用", "可以进行运算", "以上都是"],
        answer: 0,
        explanation: "void指针可以指向任何类型，但在使用前需要转换为具体类型"
    },
    {
        question: "关于指针常量和常量指针，以下说法正确的是？",
        options: ["完全相同", "可以互换", "有不同的限制", "功能相同"],
        answer: 2,
        explanation: "指针常量不能修改指针指向，常量指针不能修改指向的值"
    },
    {
        question: "结构体中的位字段主要用于？",
        options: ["节省内存", "提高性能", "增加安全性", "方便访问"],
        answer: 0,
        explanation: "位字段允许以位为单位定义结构体成员，用于节省内存空间"
    },
    {
        question: "以下哪个操作可能导致内存泄漏？",
        options: ["new未delete", "指针赋值", "指针比较", "指针置空"],
        answer: 0,
        explanation: "使用new分配内存后未使用delete释放会导致内存泄漏"
    },
    {
        question: "函数指针的主要用途是什么？",
        options: ["存储函数地址", "回调函数", "两者都是", "提高性能"],
        answer: 2,
        explanation: "函数指针可以存储函数地址，常用于实现回调机制"
    },
    {
        question: "关于结构体的继承，以下说法错误的是？",
        options: ["可以继承类", "可以被类继承", "不支持继承", "支持多继承"],
        answer: 2,
        explanation: "C++中结构体支持继承，可以继承类也可以被类继承"
    },
    {
        question: "智能指针的主要作用是什么？",
        options: ["自动计数", "自动释放", "防止内存泄漏", "以上都是"],
        answer: 3,
        explanation: "智能指针提供自动的内存管理，包括引用计数和自动释放，防止内存泄漏"
    },
    {
        question: "以下哪个不是引用的特点？",
        options: ["必须初始化", "不能为空", "可以改变指向", "像别名一样使用"],
        answer: 2,
        explanation: "引用必须在定义时初始化，且不能改变指向的对象"
    },
    {
        question: "结构体的默认拷贝是什么方式？",
        options: ["深拷贝", "浅拷贝", "不允许拷贝", "取决于编译器"],
        answer: 1,
        explanation: "结构体默认使用浅拷贝，逐字节复制成员数据"
    },
    {
        question: "关于指针的const，以下说法错误的是？",
        options: ["可以修饰指针", "可以修饰数据", "可以同时修饰两者", "必须初始化"],
        answer: 3,
        explanation: "const修饰指针不要求必须初始化，但建议初始化以避免问题"
    },
    {
        question: "以下哪个不是shared_ptr的特性？",
        options: ["引用计数", "自动释放", "可以共享", "独占所有权"],
        answer: 3,
        explanation: "shared_ptr允许多个指针共享所有权，不是独占的"
    },
    {
        question: "结构体中的静态成员有什么特点？",
        options: ["属于类型", "属于对象", "必须初始化", "不能是函数"],
        answer: 0,
        explanation: "静态成员属于结构体类型而不是具体对象，被所有对象共享"
    },
    {
        question: "关于指针和引用的区别，以下说法错误的是？",
        options: ["引用必须初始化", "指针可以为空", "引用更安全", "功能完全相同"],
        answer: 3,
        explanation: "指针和引用有不同的特性和使用场景，不能完全替代对方"
    },
    {
        question: "以下哪个操作不会导致悬垂指针？",
        options: ["删除对象", "对象超出作用域", "指针置空", "返回局部变量地址"],
        answer: 2,
        explanation: "将指针置空是安全的操作，不会导致悬垂指针问题"
    },
    {
        question: "结构体的前向声明有什么限制？",
        options: ["不能定义对象", "不能声明指针", "不能使用sizeof", "可以访问成员"],
        answer: 0,
        explanation: "结构体的前向声明只能用于声明指针或引用，不能定义对象或访问成员"
    },
    {
        question: "以下哪个不是unique_ptr的特性？",
        options: ["独占所有权", "自动释放", "可以转移", "可以共享"],
        answer: 3,
        explanation: "unique_ptr具有独占所有权，不能共享，但可以转移所有权"
    },
    {
        question: "关于结构体的位字段，以下说法错误的是？",
        options: ["可以节省空间", "可以跨字节", "可以是任何类型", "不能取地址"],
        answer: 2,
        explanation: "位字段只能是整型或枚举类型，不能是浮点型或指针"
    },

    // 代码题（20道）
    {
        question: "以下代码输出什么？\nstruct Point { int x, y; };\nPoint p = {1, 2};\nPoint* ptr = &p;\ncout << ptr->x << ptr->y;",
        options: ["12", "1 2", "21", "2 1"],
        answer: 0,
        explanation: "通过指针使用->运算符访问结构体成员，输出12"
    },
    {
        question: "这段代码的结果是？\nint a = 5;\nint* p = &a;\nint** pp = &p;\ncout << **pp;",
        options: ["5", "地址值", "0", "错误"],
        answer: 0,
        explanation: "二级指针pp指向指针p，*p得到a的值5"
    },
    {
        question: "下面的代码输出什么？\nstruct Test { int x; };\nTest t1 = {1}, t2 = {2};\nTest &r = t1;\nr = t2;\ncout << t1.x;",
        options: ["1", "2", "0", "未定义"],
        answer: 1,
        explanation: "引用r指向t1，赋值t2会改变t1的内容"
    },
    {
        question: "这段代码会输出什么？\nint arr[] = {1,2,3};\nint* p = arr;\ncout << *(p+1);",
        options: ["1", "2", "3", "未定义"],
        answer: 1,
        explanation: "指针加1移动到下一个元素，*(p+1)访问arr[1]即2"
    },
    {
        question: "以下代码的输出是什么？\nstruct S { int a; S* next; };\nS s1 = {1, nullptr}, s2 = {2, &s1};\ncout << s2.next->a;",
        options: ["1", "2", "0", "错误"],
        answer: 0,
        explanation: "s2.next指向s1，访问s1的成员a得到1"
    },
    {
        question: "这段代码结果是？\nint x = 10;\nconst int* p = &x;\nint* const q = &x;\n*q = 20;\ncout << x;",
        options: ["10", "20", "编译错误", "未定义"],
        answer: 1,
        explanation: "q是指针常量，可以修改指向的值，x被改为20"
    },
    {
        question: "下面的代码输出什么？\nstruct A { int x; A(int a):x(a){} };\nA* p = new A(5);\ncout << p->x;\ndelete p;",
        options: ["5", "0", "未定义", "编译错误"],
        answer: 0,
        explanation: "使用构造函数初始化动态分配的对象，输出x的值5"
    },
    {
        question: "这段代码会输出什么？\nint a = 1, b = 2;\nint* p = &a;\np = &b;\ncout << *p;",
        options: ["1", "2", "0", "未定义"],
        answer: 1,
        explanation: "指针p先指向a后指向b，解引用得到b的值2"
    },
    {
        question: "以下代码输出什么？\nstruct S { int x = 1; };\nS arr[2] = {{2}};\ncout << arr[0].x << arr[1].x;",
        options: ["21", "22", "11", "20"],
        answer: 0,
        explanation: "arr[0]被初始化为2，arr[1]使用默认值1"
    },
    {
        question: "这段代码的结果是？\nint* p = nullptr;\nif(p && *p == 1) cout << 1;\nelse cout << 0;",
        options: ["1", "0", "段错误", "未定义"],
        answer: 1,
        explanation: "短路运算，p为空时不会执行*p，输出0"
    },
    {
        question: "下面的代码输出什么？\nstruct S { int a[2]; } s = {{1,2}};\nint* p = s.a;\ncout << p[1];",
        options: ["1", "2", "0", "未定义"],
        answer: 1,
        explanation: "p指向数组a的首地址，p[1]访问第二个元素2"
    },
    {
        question: "这段代码会输出什么？\nint x = 10;\nint& r = x;\nint* p = &r;\n*p = 20;\ncout << x;",
        options: ["10", "20", "编译错误", "未定义"],
        answer: 1,
        explanation: "通过引用的地址修改x的值为20"
    },
    {
        question: "以下代码的输出是什么？\nstruct A { virtual void f(){} };\ncout << sizeof(A);",
        options: ["4", "8", "1", "依赖平台"],
        answer: 3,
        explanation: "含有虚函数的结构体大小包含虚表指针，依赖平台"
    },
    {
        question: "这段代码结果是？\nint arr[] = {1,2,3};\nint* p = arr + 2;\nint* q = arr;\ncout << p - q;",
        options: ["2", "3", "4", "6"],
        answer: 0,
        explanation: "指针相减得到元素个数，p指向第三个元素，q指向第一个元素，差为2"
    },
    {
        question: "下面的代码输出什么？\nstruct S { int& r; } s = {*(new int(5))};\ncout << s.r;",
        options: ["5", "0", "未定义", "编译错误"],
        answer: 0,
        explanation: "结构体成员r引用动态分配的整数5"
    },
    {
        question: "这段代码会输出什么？\nint* p = new int[2]{1,2};\ncout << p[0] << p[1];\ndelete[] p;",
        options: ["12", "11", "00", "未定义"],
        answer: 0,
        explanation: "动态分配并初始化数组，输出12"
    },
    {
        question: "以下代码输出什么？\nstruct A { int x; A():x(1){} };\nA a[2];\ncout << a[0].x << a[1].x;",
        options: ["11", "00", "10", "01"],
        answer: 0,
        explanation: "数组中的每个对象都调用默认构造函数，初始化x为1"
    },
    {
        question: "这段代码的结果是？\nint x = 1;\nint* const p = &x;\nconst int* q = &x;\n*p = 2;\ncout << *q;",
        options: ["1", "2", "编译错误", "未定义"],
        answer: 1,
        explanation: "通过p修改x的值为2，q虽然是常量指针但能看到更改"
    },
    {
        question: "下面的代码输出什么？\nstruct S { static int x; };\nint S::x = 1;\nS s1, s2;\nS::x = 2;\ncout << s1.x;",
        options: ["1", "2", "0", "编译错误"],
        answer: 1,
        explanation: "静态成员被所有对象共享，修改为2后所有对象都看到新值"
    },
    {
        question: "这段代码会输出什么？\nvoid f(int*& p) { p = new int(2); }\nint* p = new int(1);\nf(p);\ncout << *p;",
        options: ["1", "2", "0", "未定义"],
        answer: 1,
        explanation: "通过引用修改指针p指向新的内存，输出2"
    }
]; 