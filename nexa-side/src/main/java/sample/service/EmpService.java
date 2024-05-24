package sample.service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import sample.dao.EmpDAO;
import sample.vo.EmpVO;
import sample.vo.SearchVO;

@Service
@RequiredArgsConstructor
public class EmpService {
	
	private final EmpDAO empDao;
	
	public List<EmpVO> findAll (SearchVO params) {
		return empDao.findAll(params);
	}

}
