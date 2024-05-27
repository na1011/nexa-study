package sample.dao;

import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;
import sample.vo.EmpVO;
import sample.vo.SearchVO;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class EmpDAO {

	private final SqlSessionTemplate sqlSessionTemplate;
	
	public List<EmpVO> findAll (SearchVO params) {
		return sqlSessionTemplate.selectList("employeeMapper.findAll", params);
	}

	public void save (EmpVO emp) {
		sqlSessionTemplate.insert("employeeMapper.save", emp);
	}

	public void update (EmpVO emp) {
		sqlSessionTemplate.update("employeeMapper.update", emp);
	}

	public void delete (EmpVO emp) {
		sqlSessionTemplate.delete("employeeMapper.delete", emp);
	}
}
