package sample.vo;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;

public class RowTypeVO implements DataSetRowTypeAccessor {

    private int rowType;

    @Override
    public int getRowType() {
        return rowType;
    }

    @Override
    public void setRowType(int rowType) {
        this.rowType = rowType;
    }
}
