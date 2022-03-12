class User < ApplicationRecord
    has_secure_password
    validatest :username, presence: true, uniqueness: true
    has_many :reviews
    has_many :steaks, through: :reviews
end
