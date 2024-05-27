package sample.service;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro17.xapi.data.DataSet;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sample.dao.EmpDAO;
import sample.vo.EmpVO;
import sample.vo.SearchVO;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmpService {
	
	private final EmpDAO empDao;
	
	public List<EmpVO> findAll (SearchVO params) {
		return empDao.findAll(params);
	}

	public void update (List<EmpVO> updateList) {

		// DB 에서 수정된 데이터의 사이즈를 정의
		int size = updateList.size();

		try {
			// 수정된 데이터의 사이즈만큼 반복
			for (int i = 0; i < size; i++) {
				// 수정된 데이터를 DB 에 반영
				empDao.update(updateList.get(i));

				// DataSetRowTypeAccessor 를 통해 각 타입의 row 정보를 가져온다
				if (empDao instanceof DataSetRowTypeAccessor) {
					DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) empDao;

					// INSERT 인 경우
					if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
						// INSERT 된 데이터를 DB 에 반영
						empDao.save(updateList.get(i));
						return;
					}
					if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
						// UPDATE 된 데이터를 DB 에 반영
						empDao.update(updateList.get(i));
						return;
					}
					if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
						// DELETE 된 데이터를 DB 에 반영
						empDao.delete(updateList.get(i));
						return;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
