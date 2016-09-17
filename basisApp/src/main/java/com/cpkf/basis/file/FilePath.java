package com.cpkf.basis.file;

/**
 * 文件路径
 */
public class FilePath {
	public static void main(String[] args) {
		System.out.println("==============");
		System.out.println("当前classPath路劲:" + Thread.currentThread().getContextClassLoader().getResource("").getPath());
		System.out.println("当前项目路劲:" + System.getProperty("user.dir"));
		System.out.println("当前类classPath路劲(不包含自己):" + FilePath.class.getResource("").getPath());
		System.out.println("配置文件路径1：" + FilePath.class.getResource("/testFile/task.xml").getPath());
		System.out.println("配置文件路径2：" + FilePath.class.getClassLoader().getResource("testFile/task.xml").getPath());
		System.out.println("==============");
	}
}
