# Sets global variables for this Terraform project.

variable app_name {
    default = "flixtubeGarzafox"
}
variable location {
  default = "East US"
}

variable admin_username {
  default = "linux_admin"
}

variable app_version { # Can't be called version! That's a reserved word.
}
# ❯ az account show

# ❯ az ad sp create-for-rbac --role="Contributor" --scopes="subscriptions/<subscription-id>"
variable client_id {
}

variable client_secret {
}