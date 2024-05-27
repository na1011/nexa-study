package sample.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import sample.service.EmpService;
import sample.vo.EmpVO;
import sample.vo.SearchVO;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class EmpController {
	
	private final EmpService empService;
	
	@RequestMapping("/employee")
	public NexacroResult findAll (@ParamDataSet(name = "input") SearchVO params) {
		
		List<EmpVO> empList = empService.findAll(params);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("output", empList);
		
		return result;
	}

	@RequestMapping("/employee/update")
	public NexacroResult update (@ParamDataSet(name = "input") List<EmpVO> updateList) {

		empService.update(updateList);
		NexacroResult result = new NexacroResult();
		return result;
	}
}
