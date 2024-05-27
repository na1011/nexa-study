package sample.vo;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class EmpVO extends RowTypeVO {
	
	private int eno;
	private String ename;
	private String job;
	private String manager;
	private LocalDate hiredate;
	private int salary;
	private int commission;
	private int dno;
}
