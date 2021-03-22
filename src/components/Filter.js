import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div className='d-flex justify-content-between'>
                <div className="filter-result">{this.props.count.length} Products</div>
                <div className="filter-sort d-flex">
                    Order by price:
                    <div className="invisible" >s</div>
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>The Latest</option>
                        <option value='lowest'>The lowest</option>
                        <option value='highest'>The highest</option>
                    </select>
                </div>
                <div className='filter-size d-flex' >Processor Types
                    <div className="invisible" >s</div>

                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="i3">Core i3</option>
                        <option value="i5">Core i5</option>
                        <option value="i7">Core i7</option>
                        <option value="i9">Core i9</option>
                        <option value="i11">Core i11</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;