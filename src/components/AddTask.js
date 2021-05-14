
export const AddTask = () => {
    return (
        <form className='add-form'>
            <div className = 'form-control'>
                <label>Task</label>
                <input type="text" placeholder="Add Task" />
            </div>
            <div className = 'form-control'>
                <label>Day and Time</label>
                <input type="text" placeholder="Add Day and Time" />
            </div>
            <div className = 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="text" />
            </div>

            <input type="submit" value='save Task' />
        </form>
    )
}

export default AddTask