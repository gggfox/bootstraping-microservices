# Initialises Terraform providers and sets their version numbers.
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }

    kubernetes = {
      version = "=2.13.1"
    }
  }
}

provider "azurerm" {
    features {}
}

provider "kubernetes" {
  host = azurerm_kubernetes_cluster.cluster.kube_config[0].host
  client_certificate = base64decode(azurerm_kubernetes_cluster.cluster.kube_config[0].client_certificate)
  client_key = base64decode(azurerm_kubernetes_cluster.cluster.kube_config[0].client_key)
  cluster_ca_certificate = base64decode(azurerm_kubernetes_cluster.cluster.kube_config[0].cluster_ca_certificate)
}