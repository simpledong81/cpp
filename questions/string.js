window.stringQuestions = [
    // 理论题（30道）
    {
        question: "在C++中，以下哪个不是字符串的表示方式？",
        options: ["char数组", "string类", "char*指针", "String类"],
        answer: 3,
        explanation: "C++中字符串可以用char数组、string类或char*指针表示，没有String类（这是Java中的类）"
    },
    {
        question: "C++中string类定义在哪个头文件中？",
        options: ["<string.h>", "<cstring>", "<string>", "<strings>"],
        answer: 2,
        explanation: "C++的string类定义在<string>头文件中，<string.h>和<cstring>是C风格字符串函数的头文件"
    },
    {
        question: "关于string类的构造函数，以下说法错误的是？",
        options: ["可以无参构造", "可以用char*构造", "可以用char构造", "必须指定长度"],
        answer: 3,
        explanation: "string类的构造函数不必指定长度，它会自动处理内存分配"
    },
    {
        question: "string类的size()和length()的区别是什么？",
        options: ["size()包含空字符", "length()包含空字符", "完全相同", "size()统计字节数"],
        answer: 2,
        explanation: "在string类中，size()和length()是完全相同的函数，都返回字符串的长度"
    },
    {
        question: "以下哪个不是string类的成员函数？",
        options: ["append()", "substr()", "concat()", "strlen()"],
        answer: 3,
        explanation: "strlen()是C风格字符串函数，不是string类的成员函数"
    },
    {
        question: "string类的字符串连接可以使用哪个运算符？",
        options: ["+", "+=", "两者都可以", "都不可以"],
        answer: 2,
        explanation: "string类重载了+和+=运算符，都可以用于字符串连接"
    },
    {
        question: "关于C风格字符串，以下说法正确的是？",
        options: ["不需要结束符", "可以直接比较", "末尾有'\\0'", "长度固定"],
        answer: 2,
        explanation: "C风格字符串以'\\0'结尾，这是识别字符串结束的标志"
    },
    {
        question: "string的find()函数未找到目标时返回什么？",
        options: ["0", "-1", "string::npos", "null"],
        answer: 2,
        explanation: "string::npos是一个特殊值，表示没有找到匹配项"
    },
    {
        question: "以下哪个函数用于获取C风格字符串的长度？",
        options: ["length()", "size()", "strlen()", "sizeof()"],
        answer: 2,
        explanation: "strlen()函数用于计算C风格字符串的长度，不包括结束符'\\0'"
    },
    {
        question: "string类的compare()函数返回值表示什么？",
        options: ["相等为true", "大小关系", "字符串长度", "位置索引"],
        answer: 1,
        explanation: "compare()返回负数、0或正数，表示小于、等于或大于"
    },
    {
        question: "以下哪个不是字符串查找函数？",
        options: ["find()", "rfind()", "find_first_of()", "search()"],
        answer: 3,
        explanation: "string类没有search()函数，查找功能主要通过find系列函数实现"
    },
    {
        question: "string类的capacity()和size()的区别是什么？",
        options: ["完全相同", "capacity总是大于size", "size总是大于capacity", "没有关系"],
        answer: 1,
        explanation: "capacity()返回当前分配的存储空间大小，总是大于或等于size()"
    },
    {
        question: "关于string的clear()函数，以下说法正确的是？",
        options: ["释放内存", "清空内容", "设为null", "删除对象"],
        answer: 1,
        explanation: "clear()只清空字符串内容，不会释放分配的内存"
    },
    {
        question: "string的resize()函数的作用是什么？",
        options: ["重新分配内存", "改变容量", "改变长度", "压缩存储"],
        answer: 2,
        explanation: "resize()改变字符串的长度，可能会导致内容的截断或补充"
    },
    {
        question: "以下哪个函数不能用于字符串转换？",
        options: ["stoi()", "to_string()", "atoi()", "itoa()"],
        answer: 3,
        explanation: "C++标准库中没有itoa()函数，可以使用to_string()或其他转换函数"
    },
    {
        question: "string的replace()函数可以替换什么？",
        options: ["只能替换单个字符", "只能替换子串", "字符和子串都可以", "只能替换首次出现"],
        answer: 2,
        explanation: "replace()函数可以替换字符或子串，支持多种重载形式"
    },
    {
        question: "关于string的内存管理，以下说法错误的是？",
        options: ["自动扩展", "自动收缩", "不会内存泄漏", "总是连续存储"],
        answer: 1,
        explanation: "string不会自动收缩已分配的内存，需要手动使用shrink_to_fit()"
    },
    {
        question: "string的哪个操作可能导致迭代器失效？",
        options: ["clear()", "append()", "at()", "front()"],
        answer: 1,
        explanation: "改变字符串内容的操作（如append）可能导致迭代器失效"
    },
    {
        question: "以下哪个不是string的比较方式？",
        options: ["关系运算符", "compare()", "equals()", "strcmp()"],
        answer: 2,
        explanation: "string类没有equals()方法，可以使用==运算符或compare()函数"
    },
    {
        question: "string的push_back()函数的作用是什么？",
        options: ["添加字符串", "添加字符", "插入开头", "删除末尾"],
        answer: 1,
        explanation: "push_back()用于在字符串末尾添加一个字符"
    },
    {
        question: "关于string的子串操作，以下说法错误的是？",
        options: ["可以指定起始位置", "可以指定长度", "可以超出范围", "返回新字符串"],
        answer: 2,
        explanation: "子串操作不能超出字符串范围，否则会抛出异常"
    },
    {
        question: "string的哪个函数用于获取内部的C风格字符串？",
        options: ["get()", "data()", "c_str()", "char_str()"],
        answer: 2,
        explanation: "c_str()返回一个指向以null结尾的字符数组的指针"
    },
    {
        question: "以下哪个不是字符串的有效操作？",
        options: ["截取子串", "查找字符", "排序字符", "统计长度"],
        answer: 2,
        explanation: "string类本身不提供排序功能，需要使用算法库的sort函数"
    },
    {
        question: "string的insert()函数插入位置无效时会怎样？",
        options: ["忽略操作", "补充空格", "抛出异常", "返回空串"],
        answer: 2,
        explanation: "当插入位置超出有效范围时，insert()函数会抛出out_of_range异常"
    },
    {
        question: "关于string的内存分配，以下说法正确的是？",
        options: ["总是连续的", "可能不连续", "固定大小", "不能重新分配"],
        answer: 0,
        explanation: "string类保证字符在内存中连续存储"
    },
    {
        question: "string的哪个操作不会改变字符串内容？",
        options: ["append()", "assign()", "at()", "erase()"],
        answer: 2,
        explanation: "at()函数只用于访问指定位置的字符，不会修改字符串"
    },
    {
        question: "以下哪个函数用于移除字符串首尾的空白字符？",
        options: ["trim()", "strip()", "没有这个功能", "需要自己实现"],
        answer: 3,
        explanation: "C++的string类没有提供直接移除首尾空白的函数，需要自己实现"
    },
    {
        question: "string的哪个函数可以预留存储空间？",
        options: ["reserve()", "resize()", "realloc()", "reallocate()"],
        answer: 0,
        explanation: "reserve()用于预留存储空间，可以减少重新分配的次数"
    },
    {
        question: "关于string的swap()函数，以下说法错误的是？",
        options: ["交换内容", "交换容量", "复制数据", "高效操作"],
        answer: 2,
        explanation: "swap()是高效的操作，只交换内部指针，不复制数据"
    },
    {
        question: "string类支持哪种迭代方式？",
        options: ["只支持正向迭代", "只支持反向迭代", "两者都支持", "不支持迭代"],
        answer: 2,
        explanation: "string类提供正向和反向迭代器，支持双向迭代"
    },

    // 代码题（20道）
    {
        question: "以下代码的输出是什么？\nstring s = \"Hello\";\ncout << s.substr(1, 3);",
        options: ["ell", "ello", "Hell", "el"],
        answer: 0,
        explanation: "substr(1,3)从位置1开始取3个字符，得到\"ell\""
    },
    {
        question: "这段代码会输出什么？\nstring s1 = \"Hello\", s2 = \"World\";\ncout << s1 + \" \" + s2;",
        options: ["HelloWorld", "Hello World", "Hello", "World"],
        answer: 1,
        explanation: "字符串通过+运算符连接，中间加入空格"
    },
    {
        question: "下面的代码输出什么？\nstring s = \"Programming\";\ncout << s.find('m');",
        options: ["6", "7", "8", "4"],
        answer: 0,
        explanation: "字符'm'第一次出现的位置是6（从0开始计数）"
    },
    {
        question: "这段代码的结果是？\nstring s = \"Hello\";\ns.replace(1, 2, \"i\");\ncout << s;",
        options: ["Hillo", "Hello", "Hio", "Hi"],
        answer: 2,
        explanation: "从位置1开始替换2个字符为'i'，结果是'Hio'"
    },
    {
        question: "以下代码会输出什么？\nstring s = \"Test String\";\ncout << s.length() << \" \" << s.size();",
        options: ["10 10", "11 11", "10 11", "11 10"],
        answer: 1,
        explanation: "length()和size()返回相同的值，包括空格在内共11个字符"
    },
    {
        question: "这段代码输出什么？\nstring s = \"Hello\";\ns.push_back('!');\ncout << s;",
        options: ["Hello!", "!Hello", "Hello", "!"],
        answer: 0,
        explanation: "push_back()在字符串末尾添加一个字符"
    },
    {
        question: "下面的代码输出什么？\nstring s = \"Hello\";\ns.insert(1, \"i\");\ncout << s;",
        options: ["Hiello", "Hello", "Heillo", "iHello"],
        answer: 0,
        explanation: "在位置1插入字符'i'，结果是'Hiello'"
    },
    {
        question: "这段代码会输出什么？\nstring s = \"Hello\";\ncout << s.find(\"ll\") << \" \" << s.find('o');",
        options: ["2 4", "1 4", "2 5", "1 5"],
        answer: 0,
        explanation: "子串\"ll\"从位置2开始，字符'o'在位置4"
    },
    {
        question: "以下代码的输出是什么？\nstring s = \"Test\";\ns.clear();\ncout << s.empty() << \" \" << s.size();",
        options: ["1 0", "0 0", "1 1", "0 1"],
        answer: 0,
        explanation: "clear()后字符串为空，empty()返回true(1)，size()返回0"
    },
    {
        question: "这段代码输出什么？\nstring s = \"Hello\";\ns.erase(1, 2);\ncout << s;",
        options: ["Hllo", "Hello", "Hlo", "Ho"],
        answer: 2,
        explanation: "从位置1开始删除2个字符，结果是'Hlo'"
    },
    {
        question: "下面的代码结果是？\nstring s = \"12345\";\nint n = stoi(s);\ncout << n + 1;",
        options: ["12346", "123451", "12345", "1"],
        answer: 0,
        explanation: "stoi()将字符串转换为整数，然后加1"
    },
    {
        question: "这段代码会输出什么？\nstring s = \"Hello\";\nreverse(s.begin(), s.end());\ncout << s;",
        options: ["Hello", "olleH", "lleHo", "lleH"],
        answer: 1,
        explanation: "reverse()函数将字符串反转"
    },
    {
        question: "以下代码输出什么？\nstring s = \"Hello\";\ncout << s.compare(\"Hello\") << \" \" << s.compare(\"World\");",
        options: ["0 -1", "1 0", "0 1", "-1 0"],
        answer: 0,
        explanation: "相等返回0，小于返回负数，大于返回正数"
    },
    {
        question: "这段代码的结果是？\nstring s = \"Hello\";\ns[0] = 'h';\ncout << s;",
        options: ["hello", "Hello", "hello", "HELLO"],
        answer: 2,
        explanation: "通过下标修改字符，将'H'改为'h'"
    },
    {
        question: "下面的代码输出什么？\nstring s = \"   Hello   \";\ncout << s.length();",
        options: ["5", "8", "11", "12"],
        answer: 2,
        explanation: "length()计算所有字符，包括空格，共11个字符"
    },
    {
        question: "这段代码会输出什么？\nstring s1 = \"Hello\", s2 = \"hello\";\ncout << (s1 < s2);",
        options: ["1", "0", "true", "false"],
        answer: 1,
        explanation: "大写字母的ASCII码小于小写字母，所以'H'小于'h'，返回0"
    },
    {
        question: "以下代码的输出是什么？\nstring s = \"Hello\";\ns += \" World\";\ncout << s.capacity();",
        options: ["11", "15", "16", "取决于实现"],
        answer: 3,
        explanation: "capacity()返回值取决于具体实现，通常大于等于字符串长度"
    },
    {
        question: "这段代码输出什么？\nstring s = \"Hello\";\ns.resize(3);\ncout << s;",
        options: ["Hel", "Hello", "He", "H"],
        answer: 0,
        explanation: "resize(3)将字符串长度改为3，截断后面的字符"
    },
    {
        question: "下面的代码结果是？\nstring s = \"Hello\";\nchar* p = s.data();\ncout << p[1];",
        options: ["H", "e", "l", "o"],
        answer: 1,
        explanation: "data()返回字符数组，p[1]访问第二个字符'e'"
    },
    {
        question: "这段代码会输出什么？\nstring s = \"Hello\";\ncout << s.find_first_of(\"aeiou\");",
        options: ["1", "0", "4", "string::npos"],
        answer: 1,
        explanation: "find_first_of()查找第一个匹配的字符，'e'在位置1"
    }
]; 