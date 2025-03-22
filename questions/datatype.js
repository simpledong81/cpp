window.datatypeQuestions = [
    // 理论题（30道）
    {
        question: "以下哪个不是C++的基本数据类型?",
        options: ["int", "string", "char", "float"],
        answer: 1,
        explanation: "string是C++标准库提供的类,不是基本数据类型"
    },
    {
        question: "C++中的整型数据类型包括以下哪些?",
        options: ["只有int", "short和int", "int和long", "short、int、long"],
        answer: 3,
        explanation: "C++的整型包括short、int、long等不同大小的类型"
    },
    {
        question: "float类型的精度是多少?",
        options: ["6位", "7位", "8位", "10位"],
        answer: 0,
        explanation: "float类型通常提供6位有效数字的精度"
    },
    {
        question: "double类型相比float的主要优势是什么?",
        options: ["更快的运算速度", "更高的精度", "更小的内存占用", "更好的兼容性"],
        answer: 1,
        explanation: "double提供更高的精度，通常是15-17位有效数字"
    },
    {
        question: "char类型在C++中占用多少字节?",
        options: ["1字节", "2字节", "4字节", "取决于编译器"],
        answer: 0,
        explanation: "char类型在C++中固定占用1个字节"
    },
    {
        question: "以下哪个不是C++的字符类型?",
        options: ["char", "wchar_t", "char16_t", "string"],
        answer: 3,
        explanation: "string是字符串类，不是字符类型"
    },
    {
        question: "C++中bool类型可以存储什么值?",
        options: ["0和1", "true和false", "任何整数", "任何非零值"],
        answer: 1,
        explanation: "bool类型只能存储true或false两个值"
    },
    {
        question: "关于void类型，以下说法正确的是?",
        options: ["可以定义void变量", "只能用作函数返回类型", "可以声明void指针", "以上都对"],
        answer: 2,
        explanation: "void不能定义变量，但可以用作函数返回类型和声明void指针"
    },
    {
        question: "C++中的size_t类型主要用于什么?",
        options: ["存储整数", "表示大小", "进行计算", "存储地址"],
        answer: 1,
        explanation: "size_t主要用于表示内存大小和数组索引"
    },
    {
        question: "以下哪个不是C++的复合类型?",
        options: ["数组", "指针", "引用", "整数"],
        answer: 3,
        explanation: "整数是基本类型，不是复合类型"
    },
    {
        question: "C++中的引用与指针的主要区别是什么?",
        options: ["语法不同", "必须初始化", "可以为空", "占用空间"],
        answer: 1,
        explanation: "引用必须在声明时初始化，而指针可以后续初始化"
    },
    {
        question: "关于const类型，以下说法错误的是?",
        options: ["不能修改值", "可以是任何类型", "编译时检查", "运行时检查"],
        answer: 3,
        explanation: "const是编译时常量，在编译时进行检查"
    },
    {
        question: "枚举类型的默认基础类型是什么?",
        options: ["char", "short", "int", "long"],
        answer: 2,
        explanation: "枚举类型默认使用int作为基础类型"
    },
    {
        question: "以下哪个不是C++11新增的类型?",
        options: ["long long", "char16_t", "auto", "string"],
        answer: 3,
        explanation: "string不是C++11新增的类型，它在更早的标准中就存在"
    },
    {
        question: "C++中的auto关键字的作用是什么?",
        options: ["自动存储", "类型推导", "自动初始化", "自动释放"],
        answer: 1,
        explanation: "auto用于让编译器自动推导变量的类型"
    },
    {
        question: "关于类型转换，以下说法正确的是?",
        options: ["总是安全的", "可能丢失精度", "编译器不允许", "运行时决定"],
        answer: 1,
        explanation: "类型转换可能导致精度丢失或数据截断"
    },
    {
        question: "C++中的字符串字面量的类型是什么?",
        options: ["string", "char*", "const char*", "char[]"],
        answer: 2,
        explanation: "字符串字面量的类型是const char*"
    },
    {
        question: "以下哪个不是C++的类型限定符?",
        options: ["const", "volatile", "mutable", "static"],
        answer: 3,
        explanation: "static是存储类说明符，不是类型限定符"
    },
    {
        question: "C++中的nullptr的类型是什么?",
        options: ["void*", "int*", "std::nullptr_t", "char*"],
        answer: 2,
        explanation: "nullptr的类型是std::nullptr_t"
    },
    {
        question: "关于unsigned类型，以下说法错误的是?",
        options: ["不能表示负数", "范围更大", "可以溢出", "性能更差"],
        answer: 3,
        explanation: "unsigned类型的性能通常与signed类型相同"
    },
    {
        question: "C++中的类型别名可以使用哪个关键字?",
        options: ["alias", "typedef", "using", "typedef和using都可以"],
        answer: 3,
        explanation: "C++支持使用typedef和using定义类型别名"
    },
    {
        question: "以下哪个不是POD类型?",
        options: ["int", "char", "float", "string"],
        answer: 3,
        explanation: "string是类类型，不是POD（Plain Old Data）类型"
    },
    {
        question: "C++中的联合体（union）的特点是什么?",
        options: ["多个成员共享内存", "成员可以同时使用", "自动类型转换", "线程安全"],
        answer: 0,
        explanation: "联合体的所有成员共享同一块内存空间"
    },
    {
        question: "关于结构体（struct）对齐，以下说法正确的是?",
        options: ["不需要对齐", "自动对齐", "手动对齐", "没有对齐"],
        answer: 1,
        explanation: "结构体成员会按照编译器的规则自动进行内存对齐"
    },
    {
        question: "C++中的位域（bit field）主要用于什么?",
        options: ["节省内存", "提高性能", "增加安全性", "提高可读性"],
        answer: 0,
        explanation: "位域用于节省内存，可以精确控制字段占用的位数"
    },
    {
        question: "以下哪个不是C++的作用域?",
        options: ["块作用域", "文件作用域", "函数作用域", "包作用域"],
        answer: 3,
        explanation: "C++没有包作用域的概念"
    },
    {
        question: "C++中的静态类型检查发生在什么时候?",
        options: ["编译时", "运行时", "链接时", "加载时"],
        answer: 0,
        explanation: "C++在编译时进行静态类型检查"
    },
    {
        question: "关于类型安全，以下说法错误的是?",
        options: ["防止类型错误", "提高代码质量", "降低性能", "编译时检查"],
        answer: 2,
        explanation: "类型安全通常不会显著影响性能"
    },
    {
        question: "C++中的类型推导主要在什么时候进行?",
        options: ["运行时", "编译时", "链接时", "预处理时"],
        answer: 1,
        explanation: "类型推导是在编译时进行的"
    },
    {
        question: "以下哪个不是C++的类型转换运算符?",
        options: ["static_cast", "dynamic_cast", "const_cast", "auto_cast"],
        answer: 3,
        explanation: "C++没有auto_cast运算符"
    },

    // 代码题（20道）
    {
        question: "以下代码的输出是什么?\nint x = 5;\ndouble y = 2;\ncout << x/y;",
        options: ["2", "2.5", "2.0", "3"],
        answer: 1,
        explanation: "当整数除以浮点数时,结果会自动转换为浮点数"
    },
    {
        question: "下面的代码会输出什么?\nchar c = 65;\ncout << c;",
        options: ["65", "A", "0", "编译错误"],
        answer: 1,
        explanation: "字符65在ASCII码中对应大写字母A"
    },
    {
        question: "这段代码的输出结果是什么?\nint i = 2.8;\ncout << i;",
        options: ["2", "3", "2.8", "编译错误"],
        answer: 0,
        explanation: "浮点数赋值给整数时会截断小数部分"
    },
    {
        question: "以下代码会输出什么?\nshort s = 32767;\ns++;\ncout << s;",
        options: ["32768", "-32768", "0", "编译错误"],
        answer: 1,
        explanation: "超出short范围会发生溢出，变成最小值-32768"
    },
    {
        question: "这段代码的结果是?\nbool b = 42;\ncout << b;",
        options: ["42", "1", "true", "false"],
        answer: 1,
        explanation: "bool类型输出1表示true，0表示false"
    },
    {
        question: "下面的代码输出什么?\nint x = 10;\ndouble d = x/4;\ncout << d;",
        options: ["2.5", "2.0", "2", "3"],
        answer: 1,
        explanation: "整数除法的结果赋值给double，但除法本身是整数除法"
    },
    {
        question: "这段代码会输出什么?\nchar c = 128;\ncout << (int)c;",
        options: ["128", "-128", "0", "编译错误"],
        answer: 1,
        explanation: "char类型溢出，128超出范围变成-128"
    },
    {
        question: "以下代码的输出是什么?\nint i = 5;\nfloat f = 3.14;\ncout << sizeof(i+f);",
        options: ["4", "8", "取决于编译器", "编译错误"],
        answer: 0,
        explanation: "int和float运算的结果是float类型，占4字节"
    },
    {
        question: "这段代码的输出结果是?\nunsigned int u = -1;\ncout << u;",
        options: ["0", "-1", "4294967295", "编译错误"],
        answer: 2,
        explanation: "-1转换为unsigned int得到最大值4294967295"
    },
    {
        question: "下面的代码会输出什么?\nint x = 3.14 + 2;\ncout << x;",
        options: ["5", "5.14", "6", "编译错误"],
        answer: 0,
        explanation: "浮点数和整数相加后赋值给int会截断小数部分"
    },
    {
        question: "这段代码输出什么?\nchar a = '1';\nchar b = '2';\ncout << a + b;",
        options: ["3", "12", "99", "编译错误"],
        answer: 2,
        explanation: "字符'1'和'2'的ASCII码值相加"
    },
    {
        question: "以下代码会输出什么?\ndouble d = 3.14;\nint i = d;\ndouble e = i;\ncout << (d == e);",
        options: ["0", "1", "3.14", "编译错误"],
        answer: 0,
        explanation: "转换过程中精度丢失，所以不相等"
    },
    {
        question: "这段代码的结果是?\nint i = 1;\nwhile(i < 5) {\n    i *= 2;\n}\ncout << i;",
        options: ["4", "6", "8", "16"],
        answer: 2,
        explanation: "1->2->4->8，当i=8时循环结束"
    },
    {
        question: "下面的代码输出什么?\nint a = 5;\nint& b = a;\nb = 10;\ncout << a;",
        options: ["5", "10", "15", "编译错误"],
        answer: 1,
        explanation: "通过引用修改变量的值"
    },
    {
        question: "这段代码会输出什么?\nint* p = nullptr;\ncout << (p == 0);",
        options: ["0", "1", "nullptr", "编译错误"],
        answer: 1,
        explanation: "nullptr与0比较会返回true"
    },
    {
        question: "以下代码的输出是什么?\nint x = 10;\nvoid* p = &x;\ncout << *(int*)p;",
        options: ["10", "地址值", "未定义行为", "编译错误"],
        answer: 0,
        explanation: "将void指针转换回int指针后可以正确访问值"
    },
    {
        question: "这段代码输出什么?\nconst int& ref = 42;\ncout << ref;",
        options: ["42", "地址值", "编译错误", "未定义行为"],
        answer: 0,
        explanation: "可以将字面量绑定到const引用"
    },
    {
        question: "下面的代码会输出什么?\nenum Color {RED, GREEN, BLUE};\nColor c = RED;\ncout << c;",
        options: ["RED", "0", "1", "编译错误"],
        answer: 1,
        explanation: "枚举常量默认从0开始编号"
    },
    {
        question: "这段代码的输出结果是?\nint arr[3] = {1, 2, 3};\nint* p = arr;\ncout << *++p;",
        options: ["1", "2", "3", "未定义行为"],
        answer: 1,
        explanation: "指针先自增再解引用，访问数组第二个元素"
    },
    {
        question: "以下代码会输出什么?\nint x = 1;\ndouble y = x/2;\ncout << y;",
        options: ["0", "0.5", "1", "编译错误"],
        answer: 0,
        explanation: "整数除法结果为0，然后转换为double类型"
    }
]; 