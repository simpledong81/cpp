window.arrayQuestions = [
    // 理论题（30道）
    {
        question: "以下哪个是C++11引入的数组容器?",
        options: ["vector", "array", "deque", "list"],
        answer: 1,
        explanation: "std::array是C++11引入的固定大小数组容器"
    },
    {
        question: "多维数组在内存中是如何存储的?",
        options: ["完全随机", "按行优先顺序", "按列优先顺序", "取决于编译器"],
        answer: 1,
        explanation: "C++中多维数组按行优先顺序在内存中连续存储"
    },
    {
        question: "关于数组名,以下说法正确的是?",
        options: ["可以被赋值", "是常量指针", "可以自增", "可以改变指向"],
        answer: 1,
        explanation: "数组名是指向数组第一个元素的常量指针,不能被赋值或修改"
    },
    {
        question: "std::array相比普通数组的优势是什么?",
        options: ["更快的访问速度", "自动内存管理", "知道自身大小", "可以动态扩容"],
        answer: 2,
        explanation: "std::array知道自身大小,可以通过size()方法获取,而普通数组不行"
    },
    {
        question: "数组作为函数参数时会发生什么?",
        options: ["值传递", "引用传递", "退化为指针", "深拷贝"],
        answer: 2,
        explanation: "数组作为参数传递时会退化为指针,丢失大小信息"
    },
    {
        question: "关于数组的内存对齐,以下说法正确的是?",
        options: ["所有元素必须对齐", "只有第一个元素需要对齐", "不需要对齐", "取决于编译器"],
        answer: 0,
        explanation: "为了提高访问效率,数组中的所有元素都需要按照类型的要求进行内存对齐"
    },
    {
        question: "C++11中的std::array是如何实现的?",
        options: ["封装动态数组", "封装静态数组", "链表实现", "树形结构"],
        answer: 1,
        explanation: "std::array是对固定大小数组的封装,提供了更安全的接口"
    },
    {
        question: "关于数组和指针的关系,以下说法错误的是?",
        options: ["数组可以转换为指针", "指针可以用数组语法", "数组就是指针", "指针可以指向数组"],
        answer: 2,
        explanation: "数组虽然可以退化为指针,但本质上不是指针,它们是不同的类型"
    },
    {
        question: "数组作为类成员时的特点是?",
        options: ["必须指定大小", "可以动态分配", "可以延迟初始化", "可以省略大小"],
        answer: 0,
        explanation: "作为类成员的数组必须在声明时指定大小"
    },
    {
        question: "关于数组的sizeof运算,以下说法正确的是?",
        options: ["返回元素个数", "返回字节数", "返回指针大小", "返回第一个元素大小"],
        answer: 1,
        explanation: "sizeof运算符返回数组占用的总字节数"
    },
    {
        question: "关于数组的初始化,以下说法错误的是?",
        options: ["可以部分初始化", "未初始化元素为0", "可以使用花括号", "必须全部初始化"],
        answer: 3,
        explanation: "数组可以部分初始化,未初始化的元素会被自动初始化为0"
    },
    {
        question: "多维数组的元素访问顺序对性能的影响是?",
        options: ["没有影响", "按行访问更快", "按列访问更快", "随机访问最快"],
        answer: 1,
        explanation: "由于内存布局是行优先的,按行访问可以更好地利用CPU缓存"
    },
    {
        question: "关于数组的大小,以下说法正确的是?",
        options: ["必须是常量", "可以是变量", "可以在运行时确定", "以上都对"],
        answer: 0,
        explanation: "C++中数组的大小必须是编译时常量"
    },
    {
        question: "关于数组的内存分配,以下说法正确的是?",
        options: ["总是在堆上", "总是在栈上", "可以在堆或栈上", "取决于编译器"],
        answer: 2,
        explanation: "数组可以在栈上静态分配,也可以在堆上动态分配"
    },
    {
        question: "关于数组和vector的区别,以下说法错误的是?",
        options: ["大小固定vs可变", "栈上vs堆上", "性能高vs较低", "都支持随机访问"],
        answer: 1,
        explanation: "vector总是在堆上分配,而数组可以在栈上或堆上"
    },
    {
        question: "以下哪个不是数组退化为指针时丢失的信息?",
        options: ["数组大小", "元素类型", "数组维度", "数组首地址"],
        answer: 1,
        explanation: "数组退化为指针时会保留元素类型信息,但会丢失大小和维度信息"
    },
    {
        question: "关于数组的边界检查,以下说法正确的是?",
        options: ["C++自动检查", "需要手动检查", "编译器优化掉", "运行时检查"],
        answer: 1,
        explanation: "C++的原生数组不提供自动边界检查,需要程序员手动检查"
    },
    {
        question: "以下哪个容器最适合替代固定大小的数组?",
        options: ["vector", "list", "std::array", "deque"],
        answer: 2,
        explanation: "std::array是固定大小数组的安全替代品,提供了更多的成员函数和检查"
    },
    {
        question: "数组的元素类型可以是什么?",
        options: ["基本类型", "类类型", "指针类型", "以上都可以"],
        answer: 3,
        explanation: "数组的元素可以是任何类型,包括基本类型、类类型和指针类型"
    },
    {
        question: "关于数组的对齐要求,以下说法错误的是?",
        options: ["与元素类型有关", "可以手动指定", "不影响性能", "影响内存布局"],
        answer: 2,
        explanation: "内存对齐对访问性能有重要影响,特别是在某些硬件架构上"
    },
    {
        question: "以下哪个不是数组常见的使用场景?",
        options: ["缓存数据", "查找表", "动态增长", "固定集合"],
        answer: 2,
        explanation: "数组不适合需要动态增长的场景,这种情况应该使用vector"
    },
    {
        question: "关于数组的生命周期,以下说法正确的是?",
        options: ["总是程序结束", "作用域结束", "手动释放", "以上都有可能"],
        answer: 3,
        explanation: "数组的生命周期取决于其声明位置和分配方式"
    },
    {
        question: "以下哪个操作不需要知道数组的大小?",
        options: ["遍历元素", "计算容量", "访问元素", "获取首地址"],
        answer: 3,
        explanation: "获取数组首地址只需要数组名,不需要知道数组大小"
    },
    {
        question: "关于多维数组,以下说法错误的是?",
        options: ["可以不规则", "必须矩形", "可以动态", "可以嵌套"],
        answer: 0,
        explanation: "C++的多维数组必须是矩形的,每个维度的大小都必须相同"
    },
    {
        question: "以下哪个不是提高数组操作性能的方法?",
        options: ["减少复制", "缓存友好", "频繁重分配", "合适大小"],
        answer: 2,
        explanation: "频繁重分配会降低性能,应该预先分配合适的大小"
    },
    {
        question: "关于数组和链表的比较,以下说法正确的是?",
        options: ["数组总是更快", "链表总是更快", "取决于操作", "性能相同"],
        answer: 2,
        explanation: "数组和链表各有优势,性能取决于具体的操作类型"
    },
    {
        question: "C++中的数组越界访问会导致什么?",
        options: ["编译错误", "运行时错误", "未定义行为", "自动处理"],
        answer: 2,
        explanation: "数组越界访问是未定义行为,可能导致程序崩溃或不可预期的结果"
    },
    {
        question: "关于数组的拷贝构造,以下说法正确的是?",
        options: ["自动深拷贝", "自动浅拷贝", "不支持拷贝", "需要手动实现"],
        answer: 3,
        explanation: "数组不支持直接拷贝赋值,需要手动实现拷贝操作"
    },
    {
        question: "以下哪个不是std::array的成员函数?",
        options: ["at()", "front()", "push_back()", "size()"],
        answer: 2,
        explanation: "std::array是固定大小的容器,不支持push_back()等改变大小的操作"
    },
    {
        question: "关于数组的初始化列表,以下说法错误的是?",
        options: ["可以省略大小", "可以部分初始化", "必须按顺序", "可以使用表达式"],
        answer: 3,
        explanation: "初始化列表中只能使用常量表达式,不能使用一般的表达式"
    },

    // 代码题（20道）
    {
        question: "以下代码的输出是什么?\nint arr[] = {1, 2, 3};\nint* p = arr;\ncout << *(p + 1);",
        options: ["1", "2", "3", "未定义行为"],
        answer: 1,
        explanation: "指针算术运算中+1会移动到下一个元素,即arr[1]"
    },
    {
        question: "这段代码会输出什么?\nint arr[3] = {1};\ncout << arr[1];",
        options: ["1", "0", "未定义值", "编译错误"],
        answer: 1,
        explanation: "部分初始化时,未指定的元素会被初始化为0"
    },
    {
        question: "下面的代码输出什么?\nint arr[2][2] = {{1,2},{3,4}};\ncout << arr[1][0];",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "二维数组访问第二行第一列的元素"
    },
    {
        question: "这段代码的结果是?\nint arr[5];\nmemset(arr, 0, sizeof(arr));\ncout << arr[2];",
        options: ["0", "随机值", "未定义行为", "编译错误"],
        answer: 0,
        explanation: "使用memset将数组所有元素设置为0"
    },
    {
        question: "以下代码会输出什么?\nint arr[] = {1,2,3,4,5};\ncout << sizeof(arr)/sizeof(arr[0]);",
        options: ["4", "5", "20", "25"],
        answer: 1,
        explanation: "这是计算数组长度的常用方法"
    },
    {
        question: "这段代码的输出是什么?\nint arr[3][2] = {1,2,3,4,5,6};\ncout << arr[1][1];",
        options: ["2", "3", "4", "5"],
        answer: 3,
        explanation: "二维数组按行优先顺序初始化,arr[1][1]是第4个元素"
    },
    {
        question: "下面的代码会输出什么?\nchar str[] = \"Hello\";\ncout << sizeof(str);",
        options: ["5", "6", "4", "未定义行为"],
        answer: 1,
        explanation: "字符数组包含末尾的空字符'\\0'"
    },
    {
        question: "这段代码的结果是?\nint arr[3] = {1,2,3};\nint* p = arr + 1;\np[-1] = 4;\ncout << arr[0];",
        options: ["1", "2", "3", "4"],
        answer: 3,
        explanation: "p[-1]访问p指针前面的元素,即arr[0]"
    },
    {
        question: "以下代码输出什么?\nint arr[] = {1,2,3};\nint* p = arr;\np++;\ncout << arr[1]-*p;",
        options: ["0", "1", "-1", "未定义行为"],
        answer: 0,
        explanation: "p++后指向arr[1],arr[1]-*p等于2-2=0"
    },
    {
        question: "这段代码会输出什么?\nint arr[2][3] = {{1,2},{3}};\ncout << arr[1][1];",
        options: ["2", "3", "0", "未定义行为"],
        answer: 2,
        explanation: "未初始化的元素被自动初始化为0"
    },
    {
        question: "下面的代码输出是什么?\nint arr[5] = {1,2,3,4,5};\nint* p = arr;\ncout << *(p+3);",
        options: ["3", "4", "5", "未定义行为"],
        answer: 1,
        explanation: "指针加3访问第四个元素"
    },
    {
        question: "这段代码的输出结果是?\nint arr[] = {1,2,3};\nint* p = arr;\ncout << p[1];",
        options: ["1", "2", "3", "未定义行为"],
        answer: 1,
        explanation: "指针可以使用数组下标语法"
    },
    {
        question: "以下代码会输出什么?\nint arr[2][2] = {0};\narr[0][1] = 1;\ncout << arr[0][1];",
        options: ["0", "1", "未定义值", "编译错误"],
        answer: 1,
        explanation: "初始化为0后修改特定元素的值"
    },
    {
        question: "这段代码的结果是?\nconst int size = 3;\nint arr[size] = {1,2,3};\ncout << arr[size-1];",
        options: ["1", "2", "3", "编译错误"],
        answer: 2,
        explanation: "使用const变量作为数组大小是合法的"
    },
    {
        question: "下面的代码输出什么?\nint arr[] = {1,2,3,4,5};\nint* p = arr + 2;\ncout << p[-1];",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "p指向arr[2],p[-1]访问前一个元素arr[1]"
    },
    {
        question: "这段代码会输出什么?\nint arr[3] = {0};\nint* p = arr;\n*++p = 1;\ncout << arr[1];",
        options: ["0", "1", "未定义值", "编译错误"],
        answer: 1,
        explanation: "先增加指针再解引用,修改arr[1]的值"
    },
    {
        question: "以下代码的输出是什么?\nint arr[2][2] = {{1,2},{3,4}};\nint (*p)[2] = arr;\ncout << p[1][0];",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "使用数组指针访问二维数组的元素"
    },
    {
        question: "这段代码输出什么?\nint arr[] = {1,2,3};\nint* p = arr;\nint* q = p + 1;\ncout << q - p;",
        options: ["1", "2", "4", "8"],
        answer: 0,
        explanation: "指针相减得到元素个数差"
    },
    {
        question: "下面的代码会输出什么?\nint arr[5] = {1,2,3};\nfor(int i = 0; i < 5; i++) cout << arr[i];",
        options: ["12300", "12345", "123未定义值", "编译错误"],
        answer: 0,
        explanation: "部分初始化时,剩余元素被初始化为0"
    },
    {
        question: "这段代码的结果是?\nint arr[3] = {1,2,3};\nint* p = arr;\nwhile(*p) cout << *p++;",
        options: ["123", "321", "无限循环", "未定义行为"],
        answer: 0,
        explanation: "输出数组元素并移动指针"
    }
]; 