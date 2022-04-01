class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :fav_steak, presence: true

    has_many :reviews
    has_many :steaks, through: :reviews

end
