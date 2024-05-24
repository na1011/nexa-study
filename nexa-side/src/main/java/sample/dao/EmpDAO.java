package sample.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;
import sample.vo.EmpVO;
import sample.vo.SearchVO;

@Repository
@RequiredArgsConstructor
public class EmpDAO {

	private final SqlSessionTemplate sqlSessionTemplate;
	
	public List<EmpVO> findAll (SearchVO params) {
		return sqlSessionTemplate.selectList("employeeMapper.findAll", params);
	}
}
