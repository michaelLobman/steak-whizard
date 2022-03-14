class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :steaks, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :fav_steak, presence: true

end
