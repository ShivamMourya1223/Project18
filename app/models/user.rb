class User < ApplicationRecord
	 validates :name,:age,:adress,:email, presence: true
end
