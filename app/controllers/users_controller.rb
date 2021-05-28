class UsersController < ApplicationController
	before_action :set_event,only: [:update,:show,:destroy,:edit]
  def index
  	@users = User.all
  end
  def new
  	@user = User.new()
  end
  def create
  	user = User.new(person_parms)
  	user.save
  	redirect_to users_path
  end
  def edit
  end
  def update
  	@user.update(person_parms)
  	redirect_to users_path
  end
  def show
  end
  def destroy
  	@user.destroy
  	respond_to do |format|
      format.html { redirect_to users_url,notice: 'user was sucessfully deleted' }
      format.json { head :no_content }
      format.js   { render :layout => false }
   end
   end
   def set_event
   	@user = User.find(params[:id])
   end

   private
   def person_parms
   	params.require(:user).permit(:name,:age,:adress,:email)
   end
end

