package sample.vo;

import java.time.LocalDate;

import lombok.Getter;

@Getter
public class EmpVO {
	
	private int eno;
	private String ename;
	private String job;
	private String manager;
	private LocalDate hiredate;
	private int salary;
	private int commission;
	private int dno;
	
}
