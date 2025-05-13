import React from 'react'

function CreateTask() {
  return (
    <div>
      
        <div className="min-h-screen flex items-center justify-center  px-4 py-10">
          <form className="w-full max-w-2xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-white space-y-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Create New Task
            </h2>

            <div>
              <label
                htmlFor="taskTitle"
                className="block text-sm font-medium mb-1"
              >
                Task Title
              </label>
              <input
                id="taskTitle"
                type="text"
                placeholder="Make a UI design"
                className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="Enter task description..."
                className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium mb-1"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full p-3 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label
                  htmlFor="assignTo"
                  className="block text-sm font-medium mb-1"
                >
                  Assign To
                </label>
                <input
                  id="assignTo"
                  type="text"
                  placeholder="Employee name"
                  className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium mb-1"
              >
                Category
              </label>
              <input
                id="category"
                type="text"
                placeholder="Design / Development / QA"
                className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 transition duration-300 text-white font-bold py-3 rounded-md"
            >
              Create Task
            </button>
          </form>
        </div>
    </div>
  )
}

export default CreateTask
